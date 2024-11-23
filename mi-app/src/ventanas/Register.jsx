import React, { useState } from 'react';
import axios from 'axios';
import '../styles/registro.css'; // Importamos los estilos

const Register = () => {
    const [form, setForm] = useState({ nombre: '', correo: '', password: '', admin: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', form);
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.error || 'Error al registrar');
        }
    };

    return (
        <div className="registro-container dark:bg-white dark:text-black">
            <form className="registro-card dark:bg-white dark:text-black" onSubmit={handleSubmit}>
                <h1>Crear Cuenta</h1>
                <input
                    className='dark:bg-white dark:text-black'
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required
                />
                <input
                    className='dark:bg-white dark:text-black'
                    name="correo"
                    type="email"
                    placeholder="Correo"
                    onChange={handleChange}
                    required
                />
                <input
                    className='dark:bg-white dark:text-black'
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    required
                />
                <label className='dark:bg-white dark:text-black'>
                    <input
                        className='dark:bg-white dark:text-black'
                        name="admin"
                        type="checkbox"
                        onChange={handleChange}
                    />
                    ¿Es administrador?
                </label>
                <button type="submit">Registrar</button>
                <a href="/login" className="link">¿Ya tienes cuenta? Inicia sesión</a>
            </form>
        </div>
    );
};

export default Register;