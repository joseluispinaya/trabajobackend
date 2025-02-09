const Doctor = require('../models/Doctor.model');

exports.createDoctor = async (req, res) => {
  try {
    const { name, specialty, phone, address, email } = req.body;
    // Validaciones básicas
    if (!name || !specialty || !phone || !address || !email ) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
    // Verificar si el email ya está registrado
    const existingDoctor = await Doctor.findOne({ where: { email } });
    if (existingDoctor) {
      return res.status(400).json({ error: 'El email ya está registrado.' });
    }

    const doctor = await Doctor.create({ name, specialty, phone, address, email });
    res.status(201).json(doctor);

  } catch (error) {
    //Manejo de errores de Sequelize
    if(error.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: 'Error de validación', details: error.errors.map(err => err.message) });
    }

    // Manejo de otros tipos de errores
    res.status (500).json({ error: 'Error interno del servidor.', details:  error.errors.map(err => err.message) });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos los registros.', details: error.errors.map(err => err.message) });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Registro no encontrado.' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el registro, favor verifique', details: error.errors.map(err => err.message) });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, specialty, phone, address, email } = req.body;

    // Validaciones básicas
    if (!name || !specialty || !phone || !address || !email ) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Registro no encontrado.' });
    }

    await doctor.update({ name, specialty, phone, address, email });
    res.status(202).json(doctor);
  } catch (error) {
    //Manejo de errores de Sequelize
    if(error.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: 'Error de validación', details: error.errors.map(err => err.message) });
    }
    // Manejo de otros tipos de errores
    res.status(500).json({ error: 'Error al actualizar el registro, favor verifique', details: error.errors.map(err => err.message) });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Registro no encontrado.' });
    }

    await doctor.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el registro, favor verifique', details: error.errors.map(err => err.message) });
  }
};