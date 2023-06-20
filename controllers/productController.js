const Product = require('../models/Product');


// Get all products
const getProducts = async (req, res) => {
  try{
    const products = await Product.find();
    res.status(200).json({
      // data: users
      success: true,
      message: "Get products success",
      data: products
    })
  }
  catch(error){ // Exception
    res.status(500).json({
      message: "Get products failed",
      data: error
    })
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();

    res.status(201).json({
      message: "Save product success",
      data: savedProduct
    })
  } catch (error) {
    res.status(500).json({
      messgae: "Save product failed",
      data: error
    })
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const productId = req.params.id
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
      new: true
    })

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }

    res.status(200).json({
      message: "Update product success",
      data: updatedProduct
    })
  } catch(error){
    res.status(500).json({
      message: "Update product failed",
      data: error
    })
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const productId = req.params.id

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId, req.body,)

    res.status(200).json({
      message: "Delete product success",
    })
  } catch(error) {

  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}