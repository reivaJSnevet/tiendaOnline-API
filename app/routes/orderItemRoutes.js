import express from 'express';
import { addOrderItem, updateOrderItem, deleteOrderItem } from '../controllers/OrderItemController.js';

const router = express.Router();

router.post('/', addOrderItem);
router.put('/:id', updateOrderItem);
router.delete('/:id', deleteOrderItem);

export default router;
