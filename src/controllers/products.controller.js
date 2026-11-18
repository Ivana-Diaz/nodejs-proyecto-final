import { getAllProductsService, getProductByIdService, createProductService, deleteProductService } from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  const category = req.query.category;
  const products = await getAllProductsService(category);
  res.status(200).json(products);
}

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await getProductByIdService(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado." });
  }
}

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = await createProductService(product);
  res.status(201).json(newProduct);
}

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deletedProduct = await deleteProductService(id);
  res.status(200).json(deletedProduct);
}