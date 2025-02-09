const Patient = require('../models/Patient.model');
const Doctor = require('../models/Doctor.model');

exports.createPatient = async (req, res) => {
  try {
    const { name, birthdate, gender, doctor_id } = req.body;

    // Validaciones de campos obligatorios
    if (!name || !birthdate || !gender || !contact || !doctor_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validación de relación: Verificar si el doctor existe
    const doctor = await Doctor.findByPk(doctor_id);
    if (!doctor) {
      return res.status(404).json({ error: 'El doctor especificado no existe.' });
    }

    const patient = await Patient.create({ name, birthdate, gender, contact, doctor_id });
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el paciente.' });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pacientes.' });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado.' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el paciente.' });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { name, birthdate, gender, contact, doctor_id } = req.body;

    // Validaciones de campos obligatorios
    if (!name || !birthdate || !gender || !contact || !doctor_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validación de relación: Verificar si el doctor existe
    const doctor = await Doctor.findByPk(doctor_id);
    if (!doctor) {
      return res.status(404).json({ error: 'El doctor especificado no existe.' });
    }

    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado.' });
    }

    await patient.update({ name, birthdate, gender, contact, doctor_id });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el paciente.' });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado.' });
    }

    await patient.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el paciente.' });
  }
};