// Importar servicios de productos
import * as ProductService from '../services/ProductService.js';

// Controlador para obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controlador para añadir un nuevo producto
export const addProduct = async (req, res) => {
  try {
    const productData = req.body;
    const product = await ProductService.addProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controlador para actualizar un producto
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedProduct = await ProductService.updateProduct(id, updates);
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Controlador para eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductService.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
