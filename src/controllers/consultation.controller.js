const Consultation = require('../models/Consultation.model');
const Appointment = require('../models/Appointment.model');

exports.createConsultation = async (req, res) => {
  try {
    const { diagnosis, treatment, date, time, doctor_id, patient_id } = req.body;

    // Validaciones de campos obligatorios
    if (!diagnosis || !treatment || !date || !time || !doctor_id || !patient_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validación de relación: Verificar si la cita existe
    const appointment = await Appointment.findByPk(appointment_id);
    if (!appointment) {
      return res.status(404).json({ error: 'La cita especificada no existe.' });
    }

    const consultation = await Consultation.create({ diagnosis, treatment, date, time, doctor_id, patient_id });
    res.status(201).json(consultation);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la consulta.' });
  }
};

exports.getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.findAll();
    res.status(200).json(consultations);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las consultas.' });
  }
};

exports.getConsultationById = async (req, res) => {
  try {
    const consultation = await Consultation.findByPk(req.params.id);
    if (!consultation) {
      return res.status(404).json({ error: 'Consulta no encontrada.' });
    }
    res.status(200).json(consultation);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la consulta.' });
  }
};

exports.updateConsultation = async (req, res) => {
  try {
    const { diagnosis, treatment, date, time, doctor_id, patient_id } = req.body;

    // Validaciones de campos obligatorios
    if (!diagnosis || !treatment || !date || !time || !doctor_id || !patient_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validación de relación: Verificar si la cita existe
    const appointment = await Appointment.findByPk(appointment_id);
    if (!appointment) {
      return res.status(404).json({ error: 'La cita especificada no existe.' });
    }

    const consultation = await Consultation.findByPk(req.params.id);
    if (!consultation) {
      return res.status(404).json({ error: 'Consulta no encontrada.' });
    }

    await consultation.update({ diagnosis, treatment, date, time, doctor_id, appointment_id });
    res.status(200).json(consultation);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la consulta.' });
  }
};

exports.deleteConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.findByPk(req.params.id);
    if (!consultation) {
      return res.status(404).json({ error: 'Consulta no encontrada.' });
    }

    await consultation.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la consulta.' });
  }
};