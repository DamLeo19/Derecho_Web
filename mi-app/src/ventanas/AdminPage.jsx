import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AdminPage.css'; // Importa tu archivo CSS personalizado

const AdminPage = () => {
  const [form, setForm] = useState({
    nombre: '',
    fecha: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/noticias', form);
      alert('Noticia agregada exitosamente');
      setForm({ nombre: '', fecha: '', descripcion: '' }); // Resetea el formulario
    } catch (error) {
      alert('Error al agregar la noticia: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <body className='body-admin'>
    <div className="admin-container">
      <h1 className="admin-title">Panel de Administración</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre de la Noticia</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="3"
            value={form.descripcion}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Agregar Noticia</button>
      </form>
    </div>
    </body>
  );
};

export default AdminPage;
