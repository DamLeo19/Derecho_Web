const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const userRoutes = require('./routes/userRoutes');
const noticiasRoutes = require('./routes/noticiasRoutes');
const acreditacionesRoutes = require('./routes/acreditacionRoutes');
const materiasRoutes = require('./routes/materiaRoutes');
const logrosRoutes = require('./routes/logroRoute.js'); // Importa las rutas de logros

const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// Conexión a MongoDB
mongoose.connect('mongodb+srv://imajesus08:gpEO6dQD8XSLrNnF@cluster0.7lkgp.mongodb.net/derechodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/acreditaciones', acreditacionesRoutes);
app.use('/api/materias', materiasRoutes);
app.use('/api/logros', logrosRoutes); // Agrega la ruta para logros

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
