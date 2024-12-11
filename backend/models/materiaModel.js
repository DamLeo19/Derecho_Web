const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  nombre: { type: String, required: true },
  semestre: { type: Number, required: true },
  req: { type: [String], default: [] },
  habilita: { type: [String], default: [] },
});

module.exports = mongoose.model('Materia', MateriaSchema);
