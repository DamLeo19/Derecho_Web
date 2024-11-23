import React, { useState } from 'react';
import axios from 'axios';
import '../styles/registro.css'; // Importamos los estilos

const Register = () => {
    const [form, setForm] = useState({ nombre: '', correo: '', password: '', admin: false }); // `admin` siempre es false

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', form); // Verifica los valores aquí
    
        if (!form.nombre || !form.correo || !form.password) {
            return alert('Por favor, completa todos los campos.');
        }
    
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert(response.data.message);
        } catch (error) {
            console.log('Error de registro:', error.response?.data || error);
            
            // Muestra el mensaje de error específico
            if (error.response?.data?.error) {
                alert(error.response.data.error);
            } else {
                alert('Error al registrar');
            }
        }
    };
    return (
        <div className="registro-container">
            <form className="registro-card" onSubmit={handleSubmit}>
                <h1>Crear Cuenta</h1>
                <input 
                    name="nombre" 
                    type="text" 
                    placeholder="Nombre" 
                    onChange={handleChange} 
                    required 
                />
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
                {/* Ya no necesitamos el checkbox */}
                <button type="submit">Registrar</button>
                <a href="/login" className="link">¿Ya tienes cuenta? Inicia sesión</a>
            </form>
        </div>
    );
};

export default Register;
