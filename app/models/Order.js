// app/models/Order.js
import { DataTypes } from "sequelize";
import db from "../config/config.js";

const Order = db.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
},
{timestamps : true}
);

export default Order;
