const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    admin: { type: Boolean, default: false },
    password: { type: String, required: true }
});

module.exports = mongoose.model('usuario', userSchema);
