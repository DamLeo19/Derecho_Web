const express = require('express');
const router = express.Router();
const {
  createEstudiante,
  getEstudiantes,
  deleteEstudiante,
} = require('../controllers/estudianteController');

// Rutas de estudiantes
router.post('/', createEstudiante);
router.get('/', getEstudiantes);
router.delete('/:id', deleteEstudiante);

module.exports = router;
