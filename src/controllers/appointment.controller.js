const Appointment = require('../models/Appointment.model');
const Patient = require('../models/Patient.model');

exports.createAppointment = async (req, res) => {
  try {
    const { date, time, doctor_id, patient_id } = req.body;

    // Validaciones de campos obligatorios
    if (!date || !time || !doctor_id || !patient_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validación de relación: Verificar si el paciente existe
    const patient = await Patient.findByPk(patient_id);
    if (!patient) {
      return res.status(404).json({ error: 'El paciente especificado no existe.' });
    }

    const appointment = await Appointment.create({ date, time, doctor_id, patient_id });
    res.status(201).json(cita);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la cita.' });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las citas.' });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Cita no encontrada.' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la cita.' });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { date, time, doctor_id, patient_id } = req.body;

    // Validaciones de campos obligatorios
    if (!date || !time || !doctor_id || !patient_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validación de relación: Verificar si el paciente existe
    const patient = await Patient.findByPk(patient_id);
    if (!patient) {
      return res.status(404).json({ error: 'El paciente especificado no existe.' });
    }

    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Cita no encontrada.' });
    }

    await appointment.update({ date, time, doctor_id, patient_id });
    res.status(200).json(cita);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la cita.' });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Cita no encontrada.' });
    }

    await appointment.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la cita.' });
  }
};