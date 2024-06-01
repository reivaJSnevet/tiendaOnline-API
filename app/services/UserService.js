// Importar el modelo User
import {User} from '../models/index.js';

// Servicio para crear un nuevo usuario
export const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
};

// Servicio para obtener un usuario por ID
export const getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw error;
  }
};

// Servicio para actualizar un usuario
export const updateUser = async (userId, updates) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const updatedUser = await user.update(updates);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};
