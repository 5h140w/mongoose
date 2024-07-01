const express = require("express");
const {
  getallproducts,
  getbyid,
  addproduct,
  deleteproduct,
  updateproduct,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.get("/", getallproducts);
productRouter.get("/:id", getbyid);
productRouter.post("/", addproduct);
productRouter.delete("/:id", deleteproduct);
productRouter.put("/:id", updateproduct);

module.exports = productRouter;
