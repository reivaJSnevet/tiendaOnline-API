// Importar el modelo Product
import {Product} from '../models/index.js';

// Servicio para obtener todos los productos
export const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    // Manejar error como se desee
    throw error;
  }
};

// Servicio para agregar un nuevo producto
export const addProduct = async (productData) => {
  try {
    const product = await Product.create(productData);
    return product;
  } catch (error) {
    // Manejar error como se desee
    throw error;
  }
};
