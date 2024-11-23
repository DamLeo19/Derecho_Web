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
            
            // Guardamos el nombre, el token y el estado admin en localStorage
            localStorage.setItem('userName', response.data.nombre);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('isAdmin', response.data.admin); // Guardamos el estado admin
    
            // Verificamos si el usuario tiene el campo 'admin' en true o false
            const isAdmin = response.data.admin;
            console.log('Es admin?', isAdmin); // Verifica en la consola
    
            // Redirigimos según el valor de 'admin'
            if (isAdmin) {
                navigate('/admin'); // Si es admin, lo redirigimos a /admin
            } else {
                navigate('/'); // Si no es admin, lo redirigimos a la página principal
            }
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
