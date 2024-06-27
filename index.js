const connectDB = require("./config/database");
const express = require("express");
const {
  getallproducts,
  getbyid,
  addproduct,
  deleteproduct,
} = require("./controllers/productController");

connectDB();

const server = express();

server.use(express.json());
server.get("/", getallproducts);
server.get("/:id", getbyid);
server.post("/", addproduct);
server.delete("/:id", deleteproduct);

server.listen(8080);
