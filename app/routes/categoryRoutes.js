import express from 'express';
import { addCategory, getAllCategories, updateCategory } from '../controllers/CategoryController.js';

const router = express.Router();

router.post('/', addCategory);
router.get('/', getAllCategories);
router.put('/:id', updateCategory);

export default router;
