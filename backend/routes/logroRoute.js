// routes/logroRoute.js
const express = require('express');
const router = express.Router();
const {
  createLogro,
  getLogros,
  updateLogro,
  deleteLogro
} = require('../controllers/logroController');

// Rutas de logros
router.post('/', createLogro);
router.get('/', getLogros);
router.put('/:id', updateLogro);
router.delete('/:id', deleteLogro);

module.exports = router;
