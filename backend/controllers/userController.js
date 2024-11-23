const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registro de usuario
exports.register = async (req, res) => {
    const { nombre, correo, password, admin } = req.body;

    try {
        const existingUser = await User.findOne({ correo });
        if (existingUser) {
            return res.status(400).json({ error: 'Esta cuenta ya existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ nombre, correo, password: hashedPassword, admin: false });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar usuario', details: error });
    }
};

// Inicio de sesión
exports.login = async (req, res) => {
    const { correo, password } = req.body;

    try {
        const user = await User.findOne({ correo });
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: user._id, admin: user.admin }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ message: 'Inicio de sesión exitoso', token, nombre: user.nombre, admin: user.admin });
    } catch (error) {
        res.status(400).json({ error: 'Error al iniciar sesión', details: error });
    }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener usuarios', details: error });
    }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar el usuario', details: error });
    }
};
