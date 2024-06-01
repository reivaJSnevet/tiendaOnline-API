// Importar servicios de categoría
import * as CategoryService from '../services/CategoryService.js';

// Controlador para añadir una nueva categoría
export const addCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    const category = await CategoryService.addCategory(categoryData);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controlador para obtener todas las categorías
export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controlador para actualizar una categoría
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedCategory = await CategoryService.updateCategory(id, updates);
    res.json(updatedCategory);
  } catch (error) {
    res.status(404).send('Category not found');
  }
};
