// Importar servicios de pedidos
import * as OrderService from '../services/OrderService.js';

// Controlador para crear un pedido
export const createOrder = async (req, res) => {
  try {
    const orderData = req.body.order;
    const itemsData = req.body.items;
    const order = await OrderService.createOrder(orderData, itemsData);
    res.status(201).json(order);
  } catch (error) {
    console.error(error); // Log del error para el servidor
    res.status(500).send(error.message);
  }
};

// Controlador para obtener pedidos por usuario
export const getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await OrderService.getOrdersByUser(userId);
    res.json(orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
