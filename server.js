const app = require('./app');
const sequelize = require('./src/config/db.config');
const loadInitialData = require('./src/seeders/initialData');

const PORT = process.env.PORT || 3000;

// Probar la conexión a la base de datos y sincronizar modelos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
    return sequelize.sync({ force: false }); // Sincronizar modelos con la base de datos
  })
  .then(async () => {
    // Cargar datos iniciales
    await loadInitialData();

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });