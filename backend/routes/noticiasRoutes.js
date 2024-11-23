const express = require('express');
const { addNoticia } = require('../controllers/noticiasController'); // Asegúrate de tener el controlador
const router = express.Router();

// Ruta para agregar una noticia
router.post('/', addNoticia);

module.exports = router;
