// Importar los modelos necesarios
import { Order, OrderItem, Product } from '../models/index.js';
import db from '../config/config.js';

// Servicio para crear un pedido
export const createOrder = async (orderData, itemsData) => {
    const t = await db.transaction();
    try {
        const order = await Order.create(orderData, { transaction: t });
        const orderItems = await OrderItem.bulkCreate(
            itemsData.map(item => {
                const { id, ...rest } = item;
                return { ...rest, orderId: order.id };
            }),
            { transaction: t }
        );

        for (const orderItem of orderItems) {
            const product = await Product.findByPk(orderItem.productId);
            await product.update({ stock: product.stock - orderItem.quantity }, { transaction: t });
        }

        await t.commit();
        return { order, orderItems };
    } catch (error) {
        await t.rollback();
        throw error;
    }
};

// Servicio para obtener todos los pedidos de un usuario
export const getOrdersByUser = async (userId) => {
    try {
        const orders = await Order.findAll({
            where: { userId },
            include: [
                {
                    model: OrderItem,
                    include: [
                        {
                            model: Product,
                        },
                    ],
                },
            ],
        });
        return orders;
    } catch (error) {
        // Manejar error como se desee
        throw error;
    }
};
