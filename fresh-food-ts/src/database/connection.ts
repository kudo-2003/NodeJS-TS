import { Sequelize } from 'sequelize';

// khoi tao ket noi database voi cac bien moi truong
const sequelize = new Sequelize(
    process.env.DB_NAME || 'fresh_food_db',
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || "010203",
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql', // or 'sqlite', 'postgres', 'mariadb', 'or 'mssql', 
        logging: false,
    }
);

export { sequelize };