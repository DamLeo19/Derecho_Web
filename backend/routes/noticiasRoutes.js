const express = require('express');
const { addNoticia, getNoticias, updateNoticia, deleteNoticia } = require('../controllers/noticiasController');
const router = express.Router();

// Ruta para agregar una noticia
router.post('/', addNoticia);

// Ruta para obtener todas las noticias
router.get('/', getNoticias);

// Ruta para actualizar una noticia
router.put('/:id', updateNoticia);

// Ruta para eliminar una noticia
router.delete('/:id', deleteNoticia);

module.exports = router;
