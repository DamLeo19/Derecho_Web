const Acreditacion = require('../models/acreditacionModel');

// Crear una nueva acreditación
exports.createAcreditacion = async (req, res) => {
  try {
    const { nombre, imagen } = req.body;
    const newAcreditacion = new Acreditacion({ nombre, imagen });
    await newAcreditacion.save();
    res.status(201).json(newAcreditacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la acreditación' });
  }
};

// Obtener todas las acreditaciones
exports.getAcreditaciones = async (req, res) => {
  try {
    const acreditaciones = await Acreditacion.find();
    res.status(200).json(acreditaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las acreditaciones' });
  }
};

// Eliminar acreditación
exports.deleteAcreditacion = async (req, res) => {
  try {
    const { id } = req.params;
    await Acreditacion.findByIdAndDelete(id);
    res.status(200).json({ message: 'Acreditación eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la acreditación' });
  }
};
