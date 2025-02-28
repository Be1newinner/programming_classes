import { CartModel } from "../models/carts.model.js";
import { TAX } from "../constants/rates.js"
import { ProductModel } from "../models/products.model.js";
import mongoose from "mongoose";
import { UserModel } from "../models/users.model.js";

export async function increaseItemQuanityInCartController(req, res) {
  try {
    const {
      product_id,
      uid,
      action,
      quantity
    } = req.body;

    if (!product_id || !uid || !action || !quantity) return res.send({
      error: "All keys are required. product_id, uid, action, quantity!",
      data: null
    })

    // Expected Vaue in action = INCREASE | DECREASE

    const userId = new mongoose.Types.ObjectId(uid);
    const productId = new mongoose.Types.ObjectId(product_id);

    // Step 1. Check if User Exist
    const userExist = await UserModel.exists({ _id: userId });
    if (!userExist) throw new Error("User doesn't exist!")

    // Step 2. Check if Product Exist
    const product = await ProductModel.findById(productId).select("price mrp").lean()
    if (!product) throw new Error("Product doesn't exist!")

    const taxCalculated = TAX * product.price * quantity;

    const totalPrice = product.price * quantity;
    const totalMrp = product.mrp * quantity;

    // Step 3. Update Cart
    let updatedProduct = null;
    updatedProduct = await CartModel.updateOne(
      { _id: userId, "items.pid": productId },
      [
        {
          $set: {
            items: {
              $filter: {
                input: {
                  $map: {
                    input: "$items",
                    as: "item",
                    in: {
                      $mergeObjects: [
                        "$$item",
                        {
                          qty: {
                            $max: [
                              {
                                $cond: {
                                  if: { $eq: ["$$item.pid", productId] },
                                  then: {
                                    $add: [
                                      "$$item.qty",
                                      action === "INCREASE" ? quantity : -quantity,
                                    ],
                                  },
                                  else: "$$item.qty",
                                },
                              },
                              0,
                            ],
                          },
                        },
                      ],
                    },
                  },
                },
                as: "item",
                cond: { $gt: ["$$item.qty", 0] },
              },
            },
            total: { $max: [{ $add: ["$total", action === "INCREASE" ? totalPrice + taxCalculated : -(totalPrice + taxCalculated)] }, 0] },
            subtotal: { $max: [{ $add: ["$subtotal", action === "INCREASE" ? totalPrice : -totalPrice] }, 0] },
            discount: { $max: [{ $add: ["$discount", action === "INCREASE" ? totalMrp - totalPrice : -(totalMrp - totalPrice)] }, 0] },
            tax: { $max: [{ $add: ["$tax", action === "INCREASE" ? taxCalculated : -taxCalculated] }, 0] },
          },
        },
      ]
    );


    // Step 4. We will use this to add a new product in Cart if it was not found in step 3 
    if (!updatedProduct.matchedCount) {
      updatedProduct = await CartModel.updateOne({
        _id: userId
      }, {
        $push: {
          items: {
            qty: quantity,
            pid: productId
          }
        },
        $inc: {
          total: totalPrice + taxCalculated,
          subtotal: totalPrice,
          discount: totalMrp - totalPrice,
          tax: taxCalculated,
        }
      })
      return res.send({
        data: updatedProduct,
        error: null,
        message: "Item added to the array!"
      });
    } else {
      return res.send({
        data: updatedProduct,
        error: null,
        message: "Quantity updated for product!"
      });
    }

  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message, data: null });
  }
}

export async function getAllItemsOfCartController(req, res) {
  try {
    const { uid } = req.params

    const data = await CartModel.find({
      _id: uid
    });

    if (!data) {
      return res.status(404).json({
        message: "No Products Found!",
        data: null,
      });
    }

    return res.status(200).json({
      message: "Products Fetched Successfully!",
      data,
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null,
    });
  }
}