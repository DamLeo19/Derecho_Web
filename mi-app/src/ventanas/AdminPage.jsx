import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminPage.css'; // Asegúrate de tener el archivo CSS correctamente vinculado

const AdminPage = () => {
  const [form, setForm] = useState({
    nombre: '',
    fecha: '',
    descripcion: '',
  });

  const [users, setUsers] = useState([]); // Para los usuarios
  const [noticias, setNoticias] = useState([]); // Para las noticias

  // Maneja los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Agregar noticia
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/noticias', form);
      alert('Noticia agregada exitosamente');
      setForm({ nombre: '', fecha: '', descripcion: '' }); // Resetea el formulario
      fetchNoticias(); // Refresca las noticias
    } catch (error) {
      alert('Error al agregar la noticia: ' + (error.response?.data?.error || error.message));
    }
  };

  // Cargar usuarios
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      alert('Error al obtener usuarios: ' + error.message);
    }
  };

  // Eliminar usuario
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      alert('Usuario eliminado');
      fetchUsers(); // Refresca la lista de usuarios
    } catch (error) {
      alert('Error al eliminar el usuario: ' + error.message);
    }
  };

  // Cargar noticias
  const fetchNoticias = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/noticias');
      setNoticias(response.data);
    } catch (error) {
      alert('Error al obtener noticias: ' + error.message);
    }
  };

  // Editar noticia
  const handleEditNoticia = async (noticiaId) => {
    const noticia = noticias.find(n => n._id === noticiaId);
    setForm({
      nombre: noticia.nombre,
      fecha: noticia.fecha.slice(0, 10),  // Asegúrate de convertir la fecha a formato yyyy-MM-dd
      descripcion: noticia.descripcion,
    });
  };

  // Eliminar noticia
  const handleDeleteNoticia = async (noticiaId) => {
    try {
      await axios.delete(`http://localhost:5000/api/noticias/${noticiaId}`);
      alert('Noticia eliminada');
      fetchNoticias(); // Refresca las noticias
    } catch (error) {
      alert('Error al eliminar la noticia: ' + error.message);
    }
  };

  // Cargar datos cuando el componente se monta
  useEffect(() => {
    fetchUsers();
    fetchNoticias();
  }, []);

  return (
    <body className='body-admin'>
    <div className='admin-container'>
      <h1 className='admin-title'>Panel de Administración</h1>

      {/* Formulario para Noticias */}
      <form onSubmit={handleSubmit} className='admin-form'>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre de la Noticia</label>
          <input
            type='text'
            id='nombre'
            name='nombre'
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='fecha'>Fecha</label>
          <input
            type='date'
            id='fecha'
            name='fecha'
            value={form.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='descripcion'>Descripción</label>
          <textarea
            id='descripcion'
            name='descripcion'
            rows='3'
            value={form.descripcion}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type='submit'>Agregar Noticia</button>
      </form>

      {/* Tabla de Usuarios */}
      <h2>Administrar Usuarios</h2>
      <table className='admin-table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tabla de Noticias */}
      <h2>Administrar Noticias</h2>
      <table className='admin-table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {noticias.map(noticia => (
            <tr key={noticia._id}>
              <td>{noticia.nombre}</td>
              <td>{noticia.fecha}</td>
              <td>{noticia.descripcion}</td>
              <td>
                <button onClick={() => handleEditNoticia(noticia._id)}>Editar</button>
                <button onClick={() => handleDeleteNoticia(noticia._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
      
    </body>
  );
};

export default AdminPage;
