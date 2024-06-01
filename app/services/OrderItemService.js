// Importar el modelo OrderItem
import { OrderItem } from '../models/index.js';

// Servicio para agregar un nuevo ítem a un pedido
export const addOrderItem = async (itemData) => {
  try {
    const orderItem = await OrderItem.create(itemData);
    return orderItem;
  } catch (error) {
    throw error;
  }
};

// Servicio para actualizar un ítem de pedido
export const updateOrderItem = async (itemId, updates) => {
  try {
    const item = await OrderItem.findByPk(itemId);
    if (!item) {
      throw new Error('Order item not found');
    }
    const updatedItem = await item.update(updates);
    return updatedItem;
  } catch (error) {
    throw error;
  }
};

// Servicio para eliminar un ítem de pedido
export const deleteOrderItem = async (itemId) => {
  try {
    const item = await OrderItem.findByPk(itemId);
    if (!item) {
      throw new Error('Order item not found');
    }
    await item.destroy();
    return { message: 'Order item deleted successfully' };
  } catch (error) {
    throw error;
  }
};
