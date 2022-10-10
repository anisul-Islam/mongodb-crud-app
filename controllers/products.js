const Product = require("../models/products");
const { v4: uuidv4 } = require("uuid");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: "product is not found with this id" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      id: uuidv4(),
      title: req.body.title,
      price: req.body.price,
    });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (product) {
      await Product.deleteOne({ id: req.params.id });
      res.status(200).send({
        message: "product is deleted",
      });
    } else {
      res.status(404).send({ message: "product is not found with this id" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (product) {
      await Product.updateOne(
        { id: req.params.id },
        {
          $set: {
            title: req.body.title,
            price: req.body.price,
          },
        }
      );
      res.status(200).send({
        message: "product is updated",
      });
    } else {
      res.status(404).send({ message: "product is not found with this id" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
