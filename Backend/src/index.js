const express = require("express");
const cors = require("cors");
const productModel = require("./model/productModel");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/product", async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});


app.post("/api/product", async (req, res) => {
  try {
    // frontend se jo data aayega use save karo
    const product = new productModel(req.body);
    await product.save();
    res.json({ message: "Product inserted successfully", product });
  } catch (error) {
    res.status(500).json({ error: "Failed to insert product" });
  }
});





module.exports = app;
