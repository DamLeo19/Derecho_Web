import React, { useState } from 'react';
import axios from 'axios';
import '../styles/registro.css'; // Importamos los estilos

const Register = () => {
    const [form, setForm] = useState({ nombre: '', correo: '', password: '', admin: false });
    const [passwordStrength, setPasswordStrength] = useState('');

    // Función para evaluar la fuerza de la contraseña
    const evaluatePasswordStrength = (password) => {
        let strength = 0;

        if (password.length >= 8) strength += 1; // Longitud mínima
        if (/[A-Z]/.test(password)) strength += 1; // Al menos una letra mayúscula
        if (/[a-z]/.test(password)) strength += 1; // Al menos una letra minúscula
        if (/\d/.test(password)) strength += 1; // Al menos un número
        if (/[\W_]/.test(password)) strength += 1; // Al menos un carácter especial

        if (strength <= 2) return 'Baja';
        if (strength === 3 || strength === 4) return 'Media';
        if (strength === 5) return 'Alta';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (name === 'password') {
            setPasswordStrength(evaluatePasswordStrength(value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.nombre || !form.correo || !form.password) {
            return alert('Por favor, completa todos los campos.');
        }

        if (passwordStrength === 'Baja') {
            return alert('Por favor, ingresa una contraseña más segura.');
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/register', form, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error de registro:', error.response?.data || error);
            alert(error.response?.data?.error || 'Error al registrar');
        }
    };

    return (
        <div className="registro-container dark:bg-white dark:text-black">
            <div className="registro-logo">
                <img src="../../images/LogoDerecho.png" alt="Logo de la carrera" />
            </div>
            <form className="registro-card dark:bg-white dark:text-black" onSubmit={handleSubmit}>
                <h1>Crear Cuenta</h1>
                <input
                    className="dark:bg-white dark:text-black"
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required
                />
                <input
                    className="dark:bg-white dark:text-black"
                    name="correo"
                    type="email"
                    placeholder="Correo"
                    onChange={handleChange}
                    required
                />
                <input
                    className="dark:bg-white dark:text-black"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    required
                />
                <div className="password-strength">
                    <span>Seguridad de la contraseña: {passwordStrength}</span>
                    <div
                        className={`progress-bar ${
                            passwordStrength === 'Alta'
                                ? 'strong'
                                : passwordStrength === 'Media'
                                ? 'medium'
                                : 'weak'
                        }`}
                    ></div>
                </div>
                <button type="submit">Registrar</button>
                <a href="/login" className="link">¿Ya tienes cuenta? Inicia sesión</a>
            </form>
        </div>
    );
};

export default Register;
