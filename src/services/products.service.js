import * as productService from "../models/products.model.js";

export const getAllProductsService = async (category) => {
  return await productService.getProductsByCategory(category);
}

export const getProductByIdService = async (id) => {
  return await productService.getProductById(id);
}

export const createProductService = async (productData) => {
  const { name, price, category, description } = productData;
  return await productService.saveProduct({ name, price, category, description });
}

export const deleteProductService = async (id) => { 
  return await productService.deleteProduct(id); 
};