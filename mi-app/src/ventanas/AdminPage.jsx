import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminPage.css'; // Asegúrate de tener el archivo CSS correctamente vinculado

const AdminPage = () => {
  const [form, setForm] = useState({
    nombre: '',
    fecha: '',
    descripcion: '',
  });
  const [editingId, setEditingId] = useState(null); // Guarda el ID de la noticia que se está editando
  const [users, setUsers] = useState([]); // Para los usuarios
  const [noticias, setNoticias] = useState([]); // Para las noticias

  // Maneja los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Agregar noticia
  // Agregar o actualizar noticia
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (editingId) {
      // Editar noticia existente
      await axios.put(`http://localhost:5000/api/noticias/${editingId}`, form);
      alert('Noticia actualizada exitosamente');
      setEditingId(null); // Reinicia el modo de edición
    } else {
      // Agregar nueva noticia
      await axios.post('http://localhost:5000/api/noticias', form);
      alert('Noticia agregada exitosamente');
    }
    setForm({ nombre: '', fecha: '', descripcion: '' }); // Resetea el formulario
    fetchNoticias(); // Refresca las noticias

    // Scroll automático hacia la tabla de noticias
    const noticiasSection = document.querySelector('.admin-table'); // Selecciona la tabla
    if (noticiasSection) {
      noticiasSection.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start', // Alinea la tabla al inicio del viewport
      });
    }
  } catch (error) {
    alert('Error al procesar la noticia: ' + error.message);
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
const handleEditNoticia = (noticiaId) => {
  const noticia = noticias.find((n) => n._id === noticiaId);
  setForm({
    nombre: noticia.nombre,
    fecha: noticia.fecha.slice(0, 10), // Convertir fecha a formato yyyy-MM-dd
    descripcion: noticia.descripcion,
  });
  setEditingId(noticiaId); // Establecer el ID de la noticia en edición

  // Scroll automático hacia la parte superior
  window.scrollTo({
    top: 0, // Posición en píxeles desde la parte superior
    behavior: 'smooth', // Transición suave
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
      <h2>{editingId ? 'Editar Noticia' : 'Agregar Noticia'}</h2>

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
        <button type='submit'>{editingId ? 'Actualizar' : 'Agregar'}</button>
      </form>

      {/* Tabla de Usuarios */}
      <h1 className='admin-title'>Administrar Usuarios</h1>
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
      <h1 className='admin-title'>Administrar Noticias</h1>
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
