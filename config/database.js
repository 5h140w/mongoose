// Import mongoose
const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/xxxxxxx")
    .then((data) => {
      //esm databases
      console.log(data.connections[0].name);
      console.log("connected to Database");
    })
    .catch(() => {
      console.log("error");
      process.exit(1);
    });
}

module.exports = connectDB;
