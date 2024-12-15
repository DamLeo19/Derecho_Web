const mongoose = require('mongoose');

// Esquema de Estudiantes
const EstudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  semestre: { type: String, required: true },
  promedio: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: false }, // Almacena la imagen (URL o Base64)
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
