// routes/materias.js
const express = require('express');
const router = express.Router();
const {
  createMateria,
  getMaterias,
  deleteMateria,
  updateMateria
} = require('../controllers/materiaController');

// Rutas de materias
router.post('/', createMateria);
router.get('/', getMaterias);
router.delete('/:id', deleteMateria);
router.put('/:id', updateMateria);

module.exports = router;
