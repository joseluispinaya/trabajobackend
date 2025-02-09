const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

// Crear una nueva cita
router.post('/', appointmentController.createAppointment);

// Obtener todas las citas
router.get('/', appointmentController.getAppointments);

// Obtener una cita por su ID
router.get('/:id', appointmentController.getAppointmentById);

// Actualizar una cita por su ID
router.put('/:id', appointmentController.updateAppointment);

// Eliminar una cita por su ID
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;