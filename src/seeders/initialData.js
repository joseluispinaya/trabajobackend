const Doctor = require('../models/Doctor.model');
const Patient = require('../models/Patient.model');
const Appointment = require('../models/Appointment.model');
const Consultation = require('../models/Consultation.model');

const loadInitialData = async () => {
  try {
    // Verificar si ya existen datos en la base de datos
    const doctorsCount = await Doctor.count();
    if (doctorsCount === 0) {
      // Crear doctores
      const doctor1 = await Doctor.create({
        id: 1,
        name: "Dra. María Gómez",
        specialty: "Neonatología",
        phone: "63524178",
        address: "Calle 21 de Calacoto #1254/Zona Sur - La Paz",
        email: "maria.gomez@consultorio.com"        
      });

      const doctor2 = await Doctor.create({
        id: 2,
        name: "Dr. Jose Dominguez",
        specialty: "Neumología Pediátrica",
        phone: "74859641",
        address: "Calle los alamos #6547b/Zona Achumani - La Paz",
        email: "jose.dominguez@consultorio.com"
      });

      const doctor3 = await Doctor.create({
        id: 3,
        name: "Dra. Maria Illanes Campero",
        specialty: "Pediatría",
        phone: "74859641",
        address: "Calle Ballivian Edificio Torres Center Piso 7 #157b/Zona sur - La Paz",
        email: "maria.illanes@consultorio.com"
      });

      const doctor4 = await Doctor.create({
        id: 4,
        name: "Dra. Adela Zambrana",
        specialty: "Dermatología",
        phone: "68748596",
        address: "Calle Ingavi #365/Zona Central",
        email: "adela.zambrana@gmail.com"
      });

      const doctor5 = await Doctor.create({
        id: 5,
        name: "Dr. Isaac Alvarez",
        specialty: "Traumatología",
        phone: "74851263",
        address: "Av. Busch Edificio Los Cisnes piso 7 #47b Zona Miraflores",
        email: "issac.alvarez@gmail.com"
      });

      // Crear pacientes
      const patient1 = await Patient.create({
        id: 1,
        name: "Ana Lopez",
        birthdate: "2021-01-26",
        gender: "Femenino",
        contact: "74859641",
        doctor_id: doctor1.id,
      });

      const patient2 = await Patient.create({
        id: 2,
        name: "Yoel Dominguez",
        birthdate: "2018-06-13",
        gender: "Masculino",
        contact: "69854157",
        doctor_id: doctor2.id,
      });

      const patient3 = await Patient.create({
        id: 3,
        name: "Fernando Valdivia",
        birthdate: "2019-02-02",
        gender: "Masculino",
        contact: "69857415",
        doctor_id: doctor3.id,
      });

      const patient4 = await Patient.create({
        id: 4,
        name: "Rosa Montesinos",
        birthdate: "2017-10-13",
        gender: "Femenino",
        contact: "63987541",
        doctor_id: doctor4.id,
      });

      const patient5 = await Patient.create({
        id: 5,
        name: "Michel Peres Solorzano",
        birthdate: "2024-02-10",
        gender: "Femenino",
        contact: "63587412",
        doctor_id: doctor5.id,
      });

      const patient6 = await Patient.create({
        id: 6,
        name: "Daniela Aldunate",
        birthdate: "2023-12-20",
        gender: "Femenino",
        contact: "67854152",
        doctor_id: doctor1.id,
      });

      const patient7 = await Patient.create({
        id: 7,
        name: "Daniela Aldunate",
        birthdate: "2023-12-20",
        gender: "Femenino",
        contact: "67854152",
        doctor_id: doctor2.id,
      });

      // Crear citas
      const appointment1 = await Appointment.create({
        id: 1,
        date: "2024-12-23",
        time: "15:30",
        doctor_id: doctor3.id,
        patient_id: patient1.id,
      });

      const appointment2 = await Appointment.create({
        id: 2,
        date: "2024-12-26",
        time: "11:00",
        doctor_id: doctor4.id,
        patient_id: patient4.id
      });

      const appointment3 = await Appointment.create({
        id: 3,
        date: "2024-12-24",
        time: "16:15",
        doctor_id: doctor4.id,
        patient_id: patient6.id
      });

      const appointment4 = await Appointment.create({
        id: 4,
        date: "2024-12-26",
        time: "08:48",
        doctor_id: doctor2.id,
        patient_id: patient3.id
      });

      const appointment5 = await Appointment.create({
        id: 5,
        date: "2024-12-24",
        time: "18:00",
        doctor_id: doctor5.id,
        patient_id: patient5.id
      });

      const appointment6 = await Appointment.create({
        id: 6,
        date: "2024-12-27",
        time: "09:00",
        doctor_id: doctor5.id,
        patient_id: patient3.id
      });

      const appointment7 = await Appointment.create({
        id: 7,
        date: "2024-12-27",
        time: "14:30",
        doctor_id: doctor5.id,
        patient_id: patient7.id
      });
      // Crear consultas
      await Consultation.create({
        id: 1,
        diagnosis: "Tos persistente con flemas en los pulmones.",
        treatment: "Nebulizaciones dos veces al día y aspersor cada 8 hrs, consulta a coordinar en 10 días.",
        date: "2024-12-23",
        time: "15:25",
        doctor_id: doctor3.id,
        patient_id: patient2.id,
      });

      await Consultation.create({
        id: 2,
        diagnosis: "Flemas en el pulmón derecho",
        treatment: "Jarabe amoxi duo 10%, cada 6 hrs durante 10 días, después control médico al 11avo día terminado el tratamiento médico.",
        date: "2024-12-24",
        time: "10:00",
        doctor_id: doctor4.id,
        patient_id: patient4.id,
      });

      console.log('Datos iniciales cargados exitosamente.');
    } else {
      console.log('Ya existen datos en la base de datos. No se cargaron datos iniciales.');
    }
  } catch (error) {
    console.error('Error al cargar datos iniciales:', error);
  }
};

module.exports = loadInitialData;