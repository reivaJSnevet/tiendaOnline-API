import {Category} from '../app/models/index.js';

const seedCategories = async () => {
  await Category.bulkCreate([
    {
      name: 'Clothing',
      description: 'Apparel and garments',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Accessories',
      description: 'Fashion accessories',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
};

export default seedCategories;
