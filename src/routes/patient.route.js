const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

// Crear un nuevo paciente
router.post('/', patientController.createPatient);

// Obtener todos los pacientes
router.get('/', patientController.getPatients);

// Obtener un paciente por su ID
router.get('/:id', patientController.getPatientById);

// Actualizar un paciente por su ID
router.put('/:id', patientController.updatePatient);

// Eliminar un paciente por su ID
router.delete('/:id', patientController.deletePatient);

module.exports = router;