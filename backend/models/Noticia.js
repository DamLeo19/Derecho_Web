const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: Date, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model('Noticia', noticiaSchema);
