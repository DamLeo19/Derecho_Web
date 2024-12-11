const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const userRoutes = require('./routes/userRoutes'); // Rutas para usuarios
const noticiasRoutes = require('./routes/noticiasRoutes'); // Importa las rutas de noticias
const acreditacionesRoutes = require('./routes/acreditacionRoutes');

const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(cors()); // Habilita CORS para permitir solicitudes desde diferentes dominios
app.use(bodyParser.json()); // Analiza las solicitudes entrantes con cargas útiles JSON
app.use(helmet()); // Configura cabeceras HTTP seguras para proteger la aplicación
app.use(rateLimit({ // Limita la cantidad de solicitudes que una IP puede hacer en un período de tiempo
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // Limita cada IP a 100 solicitudes por ventana
}));

// Conexión a MongoDB
mongoose.connect('mongodb+srv://imajesus08:gpEO6dQD8XSLrNnF@cluster0.7lkgp.mongodb.net/derechodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Rutas
app.use('/api/users', userRoutes); // Rutas de usuarios
app.use('/api/noticias', noticiasRoutes); // Asegúrate de que esta ruta esté definida en tu backend
app.use('/api/acreditaciones', acreditacionesRoutes);

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
