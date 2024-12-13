// controllers/logroController.js
const Logro = require('../models/logroModel');

// Crear logro
exports.createLogro = async (req, res) => {
  console.log('Datos recibidos en createLogro:', req.body);
  try {
    const { titulo, descripcion, fecha, categoria } = req.body;
    const newLogro = new Logro({ titulo, descripcion, fecha, categoria });
    await newLogro.save();
    res.status(201).json(newLogro);
  } catch (error) {
    console.error('Error al crear el logro:', error);
    res.status(500).json({ error: 'Error al crear el logro' });
  }
};

// Obtener logros
exports.getLogros = async (req, res) => {
  try {
    const logros = await Logro.find();
    res.status(200).json(logros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los logros' });
  }
};

// Actualizar logro
exports.updateLogro = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, fecha, categoria } = req.body;
    const updatedLogro = await Logro.findByIdAndUpdate(
      id,
      { titulo, descripcion, fecha, categoria },
      { new: true }
    );
    if (!updatedLogro) {
      return res.status(404).json({ error: 'Logro no encontrado' });
    }
    res.status(200).json(updatedLogro);
  } catch (error) {
    console.error('Error al actualizar el logro:', error);
    res.status(500).json({ error: 'Error al actualizar el logro' });
  }
};

// Eliminar logro
exports.deleteLogro = async (req, res) => {
  try {
    const { id } = req.params;
    await Logro.findByIdAndDelete(id);
    res.status(200).json({ message: 'Logro eliminado' });
  } catch (error) {
    console.error('Error al eliminar el logro:', error);
    res.status(500).json({ error: 'Error al eliminar el logro' });
  }
};

