const express = require('express');
const router = express.Router();
const consultationController = require('../controllers/consultation.controller');

// Crear una nueva consulta
router.post('/', consultationController.createConsultation);

// Obtener todas las consultas
router.get('/', consultationController.getConsultations);

// Obtener una consulta por su ID
router.get('/:id', consultationController.getConsultationById);

// Actualizar una consulta por su ID
router.put('/:id', consultationController.updateConsultation);

// Eliminar una consulta por su ID
router.delete('/:id', consultationController.deleteConsultation);

module.exports = router;