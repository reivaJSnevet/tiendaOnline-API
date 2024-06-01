// Ejemplo en app/routes/productRoutes.js
import express from 'express';
import { getAllProducts, addProduct, updateProduct, deleteProduct } from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
