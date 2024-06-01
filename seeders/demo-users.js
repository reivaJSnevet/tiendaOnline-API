import { User } from "../app/models/index.js";

const seedUsers = async () => {
    await User.bulkCreate([
        {
        username: 'Luis',
        email: 'a@gmail.com',
        password: '123456',
        role: 'user'
        },
    ]);
};

export default seedUsers;