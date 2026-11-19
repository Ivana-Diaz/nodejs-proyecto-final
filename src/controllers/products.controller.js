import { getAllProductsService, getProductByIdService, createProductService, deleteProductService } from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  const category = req.query.category;
  const products = await getAllProductsService(category);
  if (products.length > 0) {
    res.status(200).json({
      message: "Productos encontrados.",
      data: products
    });
  } else {
    res.status(404).json({ message: "Productos no encontrados" });
  }
}

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await getProductByIdService(id);
  if (product) {
    res.status(200).json({
      message: "Producto encontrado.",
      data: product
    });
  } else {
    res.status(404).json({ message: "Producto no encontrado." });
  }
}

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = await createProductService(product);
  res.status(201).json({
    message: "Producto creado con éxito.",
    data: newProduct
  });
}

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deletedProduct = await deleteProductService(id);
  res.status(200).json({
    message: "Producto eliminado con éxito.",
    data: deletedProduct
  });
}