const connectDB = require("./config/database");
const express = require("express");
const productRouter = require("./routers/productRouters");

connectDB();

const server = express();

server.use(express.json());

server.use("/product", productRouter);

server.listen(8080);
