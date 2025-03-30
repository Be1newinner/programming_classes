const ProductModel = require("../models/productModel");

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const limit = Math.max(Math.min(req.query.limit || 6, 8), 1);
    const page = Math.max(req.query.page || 1, 1);
    const skip = (page - 1) * limit

    // console.log({ limit })

    const products = await ProductModel.find().select({
      sku: true,
      name: true,
      price: true,
      stock: true,
      image: true
    }).limit(limit).skip(skip).lean();

    res.status(200).json({ message: "Data Retrieved Successfully!", products });

  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Get All Products
exports.getSingleProductByID = async (req, res) => {
  try {
    const sku = req.params?.sku;

    if (!sku) {
      let error = new Error("SKU is Required!");
      error.statusCode = 400;
      throw error;
    }

    const products = await ProductModel.findOne({ sku }).lean();
    res.status(200).json({ message: "Data Retrieved Successfully!", products });
  } catch (error) {

    res
      .status(error?.statusCode || 500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

//  Add New Product
exports.addProduct = async (req, res) => {
  try {
    const productData = req.body;
    const sku = productData?.sku;
    if (!sku) {
      let error = new Error("SKU is Required!");
      error.statusCode = 400;
      throw error;
    }

    // const existingProduct = await ProductModel.findOne({
    //   sku,
    // }).select({ _id: true }).lean();

    const existingProduct = await ProductModel.exists({ sku })

    if (existingProduct) {
      return res.status(409).json({ message: "Product Already Exists!" });
    }

    const newProduct = await ProductModel.create(productData);
    res
      .status(201)
      .json({ message: "Product Added Successfully!", product: newProduct });
  } catch (error) {
    res
      .status(error?.statusCode || 500)
      .json({ message: "Error Adding Product", error: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).lean();

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product Not Found!" });
    }

    res.status(200).json({
      message: "Product Updated Successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error Updating Product", error: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id).lean();

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product Not Found!" });
    }

    res.status(200).json({ message: "Product Deleted Successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error Deleting Product", error: error.message });
  }
};
