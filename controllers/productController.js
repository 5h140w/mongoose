// les fonctions eli bech nesta3melhoum fil les apis

const product = require("../models/product");

module.exports.getallproducts = async (req, res) => {
  const products = await product.find();
  return res.status(200).json(products);
};

module.exports.getbyid = async (req, res) => {
  const { id } = req.params;
  const productbyid = await product.findById(id);
  return res.status(200).json(productbyid);
};

module.exports.addproduct = async (req, res) => {
  const { name, description, prix, date_creation } = req.body;
  const newProduct = new product({
    name: name,
    description: description,
    prix: prix,
    date_creation: date_creation,
  });
  await newProduct.save();
  return res.status(200).json(newProduct);
};

// delete by id
module.exports.deleteproduct = async (req, res) => {
  const { id } = req.params;
  await product.findByIdAndDelete(id);
  return res.status(200).json("deleted");
};

// update by id
module.exports.updateproduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await product.findByIdAndUpdate(id, { name: name }, { new: true });
  return res.status(200).json("updated");
};
