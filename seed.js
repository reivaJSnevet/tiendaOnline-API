import db from './app/config/config.js';
import seedCategories from './seeders/demo-categories.js';
import seedProducts from './seeders/demo-products.js';
import seedUsers from './seeders/demo-users.js';

const seedDatabase = async () => {
  try {
    await db.sync({ force: true }); // Esto recreará las tablas
    console.log('Database synced!');
    
    await seedCategories();
    console.log('Categories seeded!');
    
    await seedProducts();
    console.log('Products seeded!');

    await seedUsers();
    console.log('Users seeded!');

    console.log('Database seeding completed!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }
};

export default seedDatabase;
