import express from 'express';
import { createOrder, getOrdersByUser } from '../controllers/OrderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/user/:userId', getOrdersByUser);

export default router;
