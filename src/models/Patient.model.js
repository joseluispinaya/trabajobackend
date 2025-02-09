const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Patient = sequelize.define('Patient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'doctors',
      key: 'id',
    },
  },
}, {
  tableName: 'patients',
});

module.exports = Patient;