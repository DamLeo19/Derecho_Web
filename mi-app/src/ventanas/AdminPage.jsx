import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminPage.css'; // Asegúrate de tener el archivo CSS correctamente vinculado

const AdminPage = () => {
  const [form, setForm] = useState({
    nombre: '',
    fecha: '',
    descripcion: '',
  });
  const [userForm, setUserForm] = useState({
    nombre: '',
    correo: '',
    password: '',
    admin: true,
  });
  const [editingId, setEditingId] = useState(null); // Guarda el ID de la noticia que se está editando
  const [users, setUsers] = useState([]); // Para los usuarios
  const [noticias, setNoticias] = useState([]); // Para las noticias

  // Maneja los cambios en el formulario de noticias
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Maneja los cambios en el formulario de usuarios
  const handleUserChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserForm({
      ...userForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Agregar noticia
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/noticias/${editingId}`, form);
        alert('Noticia actualizada exitosamente');
        setEditingId(null);
      } else {
        await axios.post('http://localhost:5000/api/noticias', form);
        alert('Noticia agregada exitosamente');
      }
      setForm({ nombre: '', fecha: '', descripcion: '' });
      fetchNoticias();
      const noticiasSection = document.querySelector('.admin-table');
      if (noticiasSection) {
        noticiasSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } catch (error) {
      alert('Error al procesar la noticia: ' + error.message);
    }
  };

  // Agregar usuario
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/registeradm', userForm);
      alert('Usuario agregado exitosamente');
      setUserForm({ nombre: '', correo: '', password: '', admin: true });
      fetchUsers();
    } catch (error) {
      alert('Error al agregar usuario: ' + error.message);
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
      fetchUsers();
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
      fecha: noticia.fecha.slice(0, 10),
      descripcion: noticia.descripcion,
    });
    setEditingId(noticiaId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Eliminar noticia
  const handleDeleteNoticia = async (noticiaId) => {
    try {
      await axios.delete(`http://localhost:5000/api/noticias/${noticiaId}`);
      alert('Noticia eliminada');
      fetchNoticias();
    } catch (error) {
      alert('Error al eliminar la noticia: ' + error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchNoticias();
  }, []);

  return (
    <body className='body-admin'>
      <div className='admin-container dark:bg-white dark:text-black'>
        <h1 className='admin-title'>Panel de Administración</h1>
        <h1 className='admin-title'>Agregar Noticias</h1>

        {/* Formulario para Noticias */}
        <form onSubmit={handleSubmit} className='admin-form'>
          <div className='form-group '>
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

        {/* Formulario para Usuarios */}

        <form onSubmit={handleUserSubmit} className='admin-form'>
          <h1 className='admin-title'>Agregar Administradores</h1>
          <div className='form-group'>
            <label htmlFor='nombre'>Nombre del Usuario</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              value={userForm.nombre}
              onChange={handleUserChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='correo'>Correo Electrónico</label>
            <input
              type='email'
              id='correo'
              name='correo'
              value={userForm.correo}
              onChange={handleUserChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='correo'>Contraseña</label>
            <input
              type='password'
              id='password'
              name='password'
              value={userForm.password}
              onChange={handleUserChange}
              required
            />
          </div>
          <button type='submit'>Agregar Usuario</button>
        </form>

        {/* Tabla de Usuarios */}
        <h1 className='admin-title'>Administrar Usuarios</h1>
        <table className='admin-table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td>{user.admin ? 'Administrador' : 'Usuario'}</td>
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
