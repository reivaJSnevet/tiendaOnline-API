import {Product} from '../app/models/index.js';

const seedProducts = async () => {
  await Product.bulkCreate([
    {
      name: 'T-shirt',
      description: 'A comfortable cotton t-shirt',
      price: 19.99,
      stock: 100,
      imageUrl: 'https://www.cremme.com.au/cdn/shop/products/TShirt-Blue-1.jpg?v=1680316912&width=1428',
      categoryId: 1, // Clothing
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jeans',
      description: 'Stylish denim jeans',
      price: 49.99,
      stock: 50,
      imageUrl: 'https://www.gap.com/webcontent/0053/175/938/cn53175938.jpg',
      categoryId: 1, // Clothing
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sunglasses',
      description: 'UV protection sunglasses',
      price: 25.00,
      stock: 75,
      imageUrl: 'https://images2.ray-ban.com//cdn-record-files-pi/347b69f8-6ca1-40e4-872d-a3580139a540/b3b2ae43-3250-49e2-99fe-acfd006a819e/0RB3447__001__STD__shad__qt.png?impolicy=RB_Product_clone&width=800&bgc=%23f2f2f2',
      categoryId: 2, // Accessories
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        name: 'Backpack',
        description: 'A durable backpack',
        price: 39.99,
        stock: 30,
        imageUrl: 'https://m.media-amazon.com/images/I/81OFxhFWmML._AC_UY1000_.jpg',
        categoryId: 2, // Accessories
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Backpack',
        description: 'A durable backpack',
        price: 39.99,
        stock: 30,
        imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_e4872d36-7b4c-425f-897f-21aa3f3965cc?wid=488&hei=488&fmt=pjpeg',
        categoryId: 2, // Accessories
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ]);
};

export default seedProducts;
