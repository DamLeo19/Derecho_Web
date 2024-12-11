import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminPage.css';

const AdminPage = () => {
  // -------------------- Estados y lógica para Noticias --------------------
  const [form, setForm] = useState({
    nombre: '',
    fecha: '',
    descripcion: '',
  });
  const [editingId, setEditingId] = useState(null); // ID noticia en edición
  const [noticias, setNoticias] = useState([]); // Lista de noticias

  // -------------------- Estados y lógica para Usuarios --------------------
  const [users, setUsers] = useState([]); 
  const [userForm, setUserForm] = useState({
    nombre: '',
    correo: '',
    password: '',
    admin: true,
  });

  // -------------------- Estados y lógica para Acreditaciones --------------------
  const [acreditaciones, setAcreditaciones] = useState([]);
  const [acreditacionForm, setAcreditacionForm] = useState({
    nombre: '',
    imagen: '',
  });

  // -------------------- Estados y lógica para Materias --------------------
  const [materias, setMaterias] = useState([]);
  const [materiaForm, setMateriaForm] = useState({
    codigo: '',
    nombre: '',
    semestre: 1,
    req: '',
    habilita: ''
  });
  const [editingMateriaId, setEditingMateriaId] = useState(null);

  // -------------------- Estados y lógica para Docentes (amigo) --------------------
  const [formData, setFormData] = useState({
    nombre: "",
    cargo: "",
    descripcion: "",
    correo: "",
    redes: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChangeDocentes = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); // Previsualización de la imagen
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitDocentes = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("cargo", formData.cargo);
    data.append("descripcion", formData.descripcion);
    data.append("correo", formData.correo);
    data.append("redes", formData.redes);
    data.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/api/docentes", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      alert("Docente agregado exitosamente");
      setFormData({
        nombre: "",
        cargo: "",
        descripcion: "",
        correo: "",
        redes: "",
      });
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Hubo un error al agregar el docente.");
    }
  };

  // -------------------- Handlers generales --------------------
  // Maneja los cambios en el formulario de Noticias
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Maneja los cambios en el formulario de Usuarios
  const handleUserChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserForm({
      ...userForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Agregar o Actualizar Noticia
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

  // Agregar Usuario Admin
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

  // Cargar Usuarios
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      alert('Error al obtener usuarios: ' + error.message);
    }
  };

  // Eliminar Usuario
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      alert('Usuario eliminado');
      fetchUsers();
    } catch (error) {
      alert('Error al eliminar el usuario: ' + error.message);
    }
  };

  // Cargar Noticias
  const fetchNoticias = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/noticias');
      setNoticias(response.data);
    } catch (error) {
      alert('Error al obtener noticias: ' + error.message);
    }
  };

  // Editar Noticia
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

  // Eliminar Noticia
  const handleDeleteNoticia = async (noticiaId) => {
    try {
      await axios.delete(`http://localhost:5000/api/noticias/${noticiaId}`);
      alert('Noticia eliminada');
      fetchNoticias();
    } catch (error) {
      alert('Error al eliminar la noticia: ' + error.message);
    }
  };

  // Maneja los cambios en el formulario de Acreditaciones
  const handleAcreditacionChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imagen' && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAcreditacionForm({ ...acreditacionForm, imagen: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setAcreditacionForm({ ...acreditacionForm, [name]: value });
    }
  };

  // Enviar Acreditación
  const handleAcreditacionSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/acreditaciones', acreditacionForm);
      alert('Acreditación agregada exitosamente');
      setAcreditacionForm({ nombre: '', imagen: '' });
      fetchAcreditaciones();
    } catch (error) {
      alert('Error al agregar acreditación: ' + error.message);
    }
  };

  // Cargar Acreditaciones
  const fetchAcreditaciones = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/acreditaciones');
      setAcreditaciones(response.data);
    } catch (error) {
      alert('Error al obtener acreditaciones: ' + error.message);
    }
  };

  // Eliminar Acreditación
  const handleDeleteAcreditacion = async (acreditacionId) => {
    try {
      await axios.delete(`http://localhost:5000/api/acreditaciones/${acreditacionId}`);
      alert('Acreditación eliminada');
      fetchAcreditaciones();
    } catch (error) {
      alert('Error al eliminar la acreditación: ' + error.message);
    }
  };

  // Manejo de cambios en el formulario de Materias
  const handleMateriaChange = (e) => {
    const { name, value } = e.target;
    setMateriaForm({ ...materiaForm, [name]: value });
  };

  // Cargar Materias
  const fetchMaterias = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/materias');
      setMaterias(response.data);
    } catch (error) {
      alert('Error al obtener materias: ' + error.message);
    }
  };

  // Agregar / Actualizar Materia
  const handleMateriaSubmit = async (e) => {
    e.preventDefault();
    try {
      const reqArray = materiaForm.req.split(',').map(r => r.trim()).filter(r => r !== '');
      const habilitaArray = materiaForm.habilita.split(',').map(h => h.trim()).filter(h => h !== '');

      const materiaData = {
        codigo: materiaForm.codigo,
        nombre: materiaForm.nombre,
        semestre: materiaForm.semestre,
        req: reqArray,
        habilita: habilitaArray
      };

      if (editingMateriaId) {
        await axios.put(`http://localhost:5000/api/materias/${editingMateriaId}`, materiaData);
        alert('Materia actualizada exitosamente');
        setEditingMateriaId(null);
      } else {
        await axios.post('http://localhost:5000/api/materias', materiaData);
        alert('Materia agregada exitosamente');
      }

      setMateriaForm({ codigo: '', nombre: '', semestre: 1, req: '', habilita: '' });
      fetchMaterias();
    } catch (error) {
      alert('Error al procesar la materia: ' + error.message);
    }
  };

  // Editar Materia
  const handleEditMateria = (id) => {
    const materia = materias.find(m => m._id === id);
    setMateriaForm({
      codigo: materia.codigo,
      nombre: materia.nombre,
      semestre: materia.semestre,
      req: materia.req.join(', '),
      habilita: materia.habilita.join(', ')
    });
    setEditingMateriaId(id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Eliminar Materia
  const handleDeleteMateria = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/materias/${id}`);
      alert('Materia eliminada');
      fetchMaterias();
    } catch (error) {
      alert('Error al eliminar la materia: ' + error.message);
    }
  };

  // Cargar datos al iniciar
  useEffect(() => {
    fetchUsers();
    fetchNoticias();
    fetchAcreditaciones();
    fetchMaterias();
  }, []);

  return (
    <body className='body-admin'>
      <div className='admin-container dark:bg-white dark:text-black'>
        <h1 className='admin-title'>Panel de Administración</h1>

        {/* Formulario para Noticias */}
        <h1 className='admin-title'>Agregar Noticias</h1>
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

        {/* Formulario para Usuarios Admin */}
        <h1 className='admin-title'>Agregar Administradores</h1>
        <form onSubmit={handleUserSubmit} className='admin-form'>
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
            <label htmlFor='password'>Contraseña</label>
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

        {/* Formulario para Docentes */}
        <div className="admin-form">
          <h2 className='admin-title'>Agregar Docente</h2>
          <form onSubmit={handleSubmitDocentes} className="docente-form">
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChangeDocentes}
                required
              />
            </label>
            <label>
              Cargo:
              <select name="cargo" value={formData.cargo} onChange={handleChangeDocentes} required>
                <option value="">Seleccionar</option>
                <option value="Director de carrera">Director de carrera</option>
                <option value="Tiempo completo">Tiempo completo</option>
                <option value="Medio tiempo">Medio tiempo</option>
              </select>
            </label>
            <label>
              Descripción:
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChangeDocentes}
                required
              />
            </label>
            <label>
              Correo:
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChangeDocentes}
                required
              />
            </label>
            <label>
              Redes Sociales:
              <input
                type="text"
                name="redes"
                value={formData.redes}
                onChange={handleChangeDocentes}
                placeholder="Enlace(s) separados por comas"
              />
            </label>
            <label>
              Imagen:
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Previsualización" />
              </div>
            )}
            <button type="submit">Agregar Docente</button>
          </form>
        </div>

        {/* Formulario para Acreditaciones */}
        <h1 className='admin-title'>Agregar Acreditaciones</h1>
        <form onSubmit={handleAcreditacionSubmit} className='acreditaciones-form admin-form'>
          <div className='form-group'>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={acreditacionForm.nombre}
              onChange={handleAcreditacionChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="imagen">Imagen</label>
            <input
              type="file"
              id="imagen"
              name="imagen"
              accept="image/*"
              onChange={handleAcreditacionChange}
              required
            />
          </div>
          <button type="submit">Agregar Acreditación</button>
        </form>

        {/* Lista de Acreditaciones */}
        <h1 className='admin-title'>Acreditaciones Existentes</h1>
        <ul className='acreditaciones-list'>
          {acreditaciones.map((acreditacion) => (
            <li key={acreditacion._id} className='acreditacion-item'>
              <p className='titeacre'>{acreditacion.nombre}</p>
              <img src={acreditacion.imagen} alt={acreditacion.nombre} className='acreditacion-image' />
              <button onClick={() => handleDeleteAcreditacion(acreditacion._id)} className="delete-button">
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        {/* Formulario para Materias */}
        <h1 className='admin-title'>Agregar / Editar Materias</h1>
        <form onSubmit={handleMateriaSubmit} className='admin-form'>
          <div className='form-group'>
            <label htmlFor='codigo'>Código de la Materia (ej: DER-111)</label>
            <input
              type='text'
              id='codigo'
              name='codigo'
              value={materiaForm.codigo}
              onChange={handleMateriaChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='nombre'>Nombre de la Materia</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              value={materiaForm.nombre}
              onChange={handleMateriaChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='semestre'>Semestre</label>
            <input
              type='number'
              id='semestre'
              name='semestre'
              value={materiaForm.semestre}
              onChange={handleMateriaChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='req'>Requisitos (separados por coma)</label>
            <input
              type='text'
              id='req'
              name='req'
              value={materiaForm.req}
              onChange={handleMateriaChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='habilita'>Habilita (separados por coma)</label>
            <input
              type='text'
              id='habilita'
              name='habilita'
              value={materiaForm.habilita}
              onChange={handleMateriaChange}
            />
          </div>
          <button type='submit'>{editingMateriaId ? 'Actualizar Materia' : 'Agregar Materia'}</button>
        </form>

        {/* Tabla de Materias */}
        <h1 className='admin-title'>Administrar Materias</h1>
        <table className='admin-table'>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Semestre</th>
              <th>Requisitos</th>
              <th>Habilita</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {materias.map(materia => (
              <tr key={materia._id}>
                <td>{materia.codigo}</td>
                <td>{materia.nombre}</td>
                <td>{materia.semestre}</td>
                <td>{materia.req.join(', ')}</td>
                <td>{materia.habilita.join(', ')}</td>
                <td>
                  <button onClick={() => handleEditMateria(materia._id)}>Editar</button>
                  <button onClick={() => handleDeleteMateria(materia._id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
