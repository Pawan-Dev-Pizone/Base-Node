import Sequelize from 'sequelize';
import tedious from 'tedious';
import dotenv from "dotenv";

dotenv.config({
  path:'./.env.local'
})

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mssql",
    dialectModule: tedious,
    logging: console.log,
    port: process.env.DB_PORT
  });
  export default sequelize;