// Importar servicios de OrderItem
import * as OrderItemService from '../services/OrderItemService.js';

// Controlador para añadir un nuevo ítem a un pedido
export const addOrderItem = async (req, res) => {
  try {
    const itemData = req.body;
    const orderItem = await OrderItemService.addOrderItem(itemData);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controlador para actualizar un ítem de pedido
export const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedOrderItem = await OrderItemService.updateOrderItem(id, updates);
    res.json(updatedOrderItem);
  } catch (error) {
    res.status(404).send('Order item not found');
  }
};

// Controlador para eliminar un ítem de pedido
export const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    await OrderItemService.deleteOrderItem(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
