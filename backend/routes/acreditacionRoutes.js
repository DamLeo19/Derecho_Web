const express = require('express');
const router = express.Router();
const {
  createAcreditacion,
  getAcreditaciones,
  deleteAcreditacion,
} = require('../controllers/acreditacionController');

// Rutas de acreditaciones
router.post('/', createAcreditacion);
router.get('/', getAcreditaciones);
router.delete('/:id', deleteAcreditacion);

module.exports = router;
