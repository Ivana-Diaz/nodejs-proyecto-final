import { getAllProducts, getProductById, createProduct, deleteProduct } from "../models/products.model.js";

export const getAllProductsService = async (category) => {
  return await getAllProducts(category);
}

export const getProductByIdService = async (id) => {
  return await getProductById(id);
}

export const createProductService = async (productData) => {
  const { name, price, category, description } = productData;
  return await createProduct({ name, price, category, description });
}

export const deleteProductService = async (id) => { 
  return await deleteProduct(id); 
};