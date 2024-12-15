const Estudiante = require('../models/estudianteModel');

// Crear un nuevo estudiante
exports.createEstudiante = async (req, res) => {
  try {
    const { nombre, semestre, promedio, descripcion, imagen } = req.body;
    const newEstudiante = new Estudiante({ nombre, semestre, promedio, descripcion, imagen });
    await newEstudiante.save();
    res.status(201).json(newEstudiante);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el estudiante' });
  }
};

// Obtener todos los estudiantes
exports.getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los estudiantes' });
  }
};

// Eliminar estudiante
exports.deleteEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    await Estudiante.findByIdAndDelete(id);
    res.status(200).json({ message: 'Estudiante eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el estudiante' });
  }
};
