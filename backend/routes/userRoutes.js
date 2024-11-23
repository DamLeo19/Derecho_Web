const express = require('express');
const { register, login, getUsers, deleteUser } = require('../controllers/userController');
const router = express.Router();

// Ruta para registrar usuario
router.post('/register', register);

// Ruta para iniciar sesión
router.post('/login', login);

// Ruta para obtener todos los usuarios
router.get('/', getUsers);

// Ruta para eliminar un usuario
router.delete('/:id', deleteUser);

module.exports = router;
