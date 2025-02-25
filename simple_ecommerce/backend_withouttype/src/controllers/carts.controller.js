import { CartModel } from "../models/carts.model.js";
import { TAX } from "../constants/rates.js"

export async function addItemQuanityInCartController(req, res) {
  try {
    const {
      _id,
      items,
      uid,
    } = req.body;

    const sanitizedItems = items.map(
      ({ title, price, mrp, img, qty, sku }) => ({
        title,
        price,
        mrp,
        img,
        qty,
        sku,
      })
    );

    if (sanitizedItems.length === 0) {
      return res
        .status(400)
        .json({ message: "Invalid items in cart", data: null });
    }

    const subtotal = sanitizedItems.reduce(
      (sum, item) => sum + item.qty * item.mrp,
      0
    );
    const discount = sanitizedItems.reduce(
      (sum, item) => sum + item.qty * (item.mrp - item.price),
      0
    );
    const total = subtotal - discount;
    const tax = total * TAX;

    if (_id) {
      const data = await CartModel.updateOne(
        { _id },
        {
          $push: { items: sanitizedItems },
          $inc: { total, subtotal, discount, tax },
        }
      );

      return res
        .status(200)
        .json({ message: "Cart updated successfully", data });
    }

    // ✅ If no cart exists, create a new cart
    const newCart = new CartModel({
      uid,
      items: sanitizedItems,
      total,
      subtotal,
      discount,
      tax,
    });

    const cart = await newCart.save();
    return res.status(201).json({ message: "Cart created successfully", cart });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message, data: null });
  }
}

export async function increaseItemQuanityInCartController(req, res) {
  try {
    const {
      _id,
      item,
      uid,
    } = req.body;

    const { title, price, mrp, img, sku } = item;

    if (!_id) {
      const newCart = new CartModel({
        uid,
        items: [
          { title, price, mrp, img, sku, qty: 1 }
        ],
        total: price + (TAX * price),
        subtotal: price,
        discount: mrp - price,
        tax: TAX * price,
      });

      const cart = await newCart.save();
      return res.status(201).json({ message: "Cart created successfully", cart });
    }

    const fetchCart = await CartModel.updateOne({ _id }, {
      items:
    })





  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message, data: null });
  }
}

export async function getAllItemsOfCartController(req, res) {
  try {

    const data = await CartModel.find({});
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

export async function updateItemQuantityInCartController(
  req,
  res
) {
  try {
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null,
    });
  }
}

export async function clearCartController(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null,
    });
  }
}
