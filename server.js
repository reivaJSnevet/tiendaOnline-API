import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import corsOptions from './app/config/corsOptions.js';

import db from './app/config/config.js';

import logger from './app/middlewares/logger.js';
import errorHandler from './app/middlewares/errorHandler.js';


import productRoutes from './app/routes/productRoutes.js';
import orderRoutes from './app/routes/orderRoutes.js';
import userRoutes from './app/routes/userRoutes.js';
import orderItemRoutes from './app/routes/orderItemRoutes.js';
import categoryRoutes from './app/routes/categoryRoutes.js';

dotenv.config();

const app = express();

app.use(logger)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});
app.use('/api', (req, res) => {
    res.json({ message: 'API is running...' });
});
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orderItems', orderItemRoutes);
app.use('/api/categories', categoryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
});