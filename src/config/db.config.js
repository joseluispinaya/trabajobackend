const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar variables de entorno desde .env

const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nombre de la base de datos
  process.env.DB_USER,       // Usuario de la base de datos
  process.env.DB_PASSWORD,   // Contraseña del usuario
  {
    host: process.env.DB_HOST, // Host de la base de datos
    port: process.env.DB_PORT, // Puerto de la base de datos
    dialect: 'postgres',       // Dialecto de la base de datos
  }
);

module.exports = sequelize;