// models/logroModel.js
const mongoose = require('mongoose');

const LogroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: Date, required: true },
  categoria: { type: String, required: true },
});

module.exports = mongoose.model('Logros', LogroSchema);
