// app/models/Category.js
import { DataTypes } from 'sequelize';
import db from '../config/config.js';

const Category = db.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},
);

export default Category;
