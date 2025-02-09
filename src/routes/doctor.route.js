const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

// Obtener todos los doctores
router.get('/', doctorController.getDoctors);

// Obtener un doctor por su ID
router.get('/:id', doctorController.getDoctorById);

// Crear un nuevo doctor
router.post('/', doctorController.createDoctor);

// Actualizar un doctor por su ID
router.put('/:id', doctorController.updateDoctor);

// Eliminar un doctor por su ID
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;