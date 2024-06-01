// Importar servicios de usuarios
import * as UserService from '../services/UserService.js';

// Controlador para crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await UserService.createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controlador para obtener un usuario por ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    res.json(user);
  } catch (error) {
    res.status(404).send('User not found');
  }
};
