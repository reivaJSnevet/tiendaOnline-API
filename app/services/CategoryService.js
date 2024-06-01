// Importar el modelo Category
import { Category } from '../models/index.js';

// Servicio para agregar una nueva categoría
export const addCategory = async (categoryData) => {
  try {
    const category = await Category.create(categoryData);
    return category;
  } catch (error) {
    throw error;
  }
};

// Servicio para obtener todas las categorías
export const getAllCategories = async () => {
  try {
    const categories = await Category.findAll();
    return categories;
  } catch (error) {
    throw error;
  }
};

// Servicio para actualizar una categoría
export const updateCategory = async (categoryId, updates) => {
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      throw new Error('Category not found');
    }
    const updatedCategory = await category.update(updates);
    return updatedCategory;
  } catch (error) {
    throw error;
  }
};
