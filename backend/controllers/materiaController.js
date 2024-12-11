// controllers/materiaController.js
const Materia = require('../models/materiaModel');

// Crear materia
exports.createMateria = async (req, res) => {
  try {
    const { codigo, nombre, semestre, req, habilita } = req.body;
    if (!codigo || !nombre || !semestre) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    const newMateria = new Materia({ codigo, nombre, semestre, req, habilita });
    await newMateria.save();
    res.status(201).json(newMateria);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la materia', details: error.message });
  }
};

// Obtener materias
exports.getMaterias = async (req, res) => {
  try {
    const materias = await Materia.find();
    res.status(200).json(materias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las materias' });
  }
};

// Actualizar materia
exports.updateMateria = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo, nombre, semestre, req, habilita } = req.body;
    const updatedMateria = await Materia.findByIdAndUpdate(
      id,
      { codigo, nombre, semestre, req, habilita },
      { new: true }
    );
    if (!updatedMateria) {
      return res.status(404).json({ error: 'Materia no encontrada' });
    }
    res.status(200).json(updatedMateria);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la materia' });
  }
};

// Eliminar materia
exports.deleteMateria = async (req, res) => {
  try {
    const { id } = req.params;
    await Materia.findByIdAndDelete(id);
    res.status(200).json({ message: 'Materia eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la materia' });
  }
};
