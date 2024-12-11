const mongoose = require('mongoose');

const AcreditacionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true }, // Base64
});

module.exports = mongoose.model('Acreditacion', AcreditacionSchema);
