import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import '../styles/login.css'; // Importamos los estilos

const Login = () => {
    const [form, setForm] = useState({ correo: '', password: '' });
    const navigate = useNavigate(); // Hook para redirigir

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', form);
            alert(`Bienvenido: Token generado -> ${response.data.token}`);
            // Guardamos el nombre en localStorage
            localStorage.setItem('userName', response.data.nombre); 
            // Redirigimos a la página principal
            navigate('/');
        } catch (error) {
            alert(error.response?.data?.error || 'Error al iniciar sesión');
        }
    };

    return (
        <div className="login-container">
            <form className="login-card" onSubmit={handleSubmit}>
                <h1>Iniciar Sesión</h1>
                <input 
                    name="correo" 
                    type="email" 
                    placeholder="Correo" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Contraseña" 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Iniciar Sesión</button>
                <a href="/register" className="link">¿No tienes cuenta? Regístrate</a>
            </form>
        </div>
    );
};

export default Login;
