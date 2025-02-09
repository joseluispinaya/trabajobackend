const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Consultation = sequelize.define('Consultation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  treatment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'patients',
      key: 'id',
    },
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
  tableName: 'consultations',
});

module.exports = Consultation;