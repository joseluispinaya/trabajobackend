const express = require('express');
const cors = require('cors');
// Importar las rutas
const doctorRoutes = require('./src/routes/doctor.route');
const patientRoutes = require('./src/routes/patient.route');
const appointmentRoutes = require('./src/routes/appointment.route');
const consultationRoutes = require('./src/routes/consultation.route');
// Crear la aplicación Express
const app = express();
// Configurar CORS
app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
// Middleware para manejar solicitudes JSON
app.use(express.json());
// Configurar las rutas
app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/consultations', consultationRoutes);
// Middleware para manejar errores 404 (Ruta no encontrada)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada.' });
});
// Middleware para manejar errores 500 (Errores del servidor)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log del error en la consola
  res.status(500).json({ error: 'Error interno del servidor.' });
});

module.exports = app;