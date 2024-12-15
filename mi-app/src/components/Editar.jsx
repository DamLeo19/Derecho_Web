import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/editar.css";

const Editar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logros, setLogros] = useState([]);
  const [newLogro, setNewLogro] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    categoria: "",
  });
  const [editingLogro, setEditingLogro] = useState(null); // Logro en edición
  const [error, setError] = useState(null);

  // Cargar logros
  useEffect(() => {
    const fetchLogros = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/logros");
        setLogros(response.data);
      } catch (error) {
        setError("No se pudieron obtener los logros.");
        console.error(error);
      }
    };
    fetchLogros();
  }, []);

  // Abrir y cerrar modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingLogro(null); // Reiniciar edición
  };

  // Manejar el cambio de formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLogro({ ...newLogro, [name]: value });
  };

  // Crear o actualizar un logro
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingLogro) {
        // Actualizar logro
        const response = await axios.put(
          `http://localhost:5000/api/logros/${editingLogro._id}`,
          newLogro
        );
        setLogros(
          logros.map((logro) =>
            logro._id === editingLogro._id ? response.data : logro
          )
        );
        Swal.fire("Éxito", "Logro actualizado correctamente", "success");
      } else {
        // Crear logro
        const response = await axios.post(
          "http://localhost:5000/api/logros",
          newLogro
        );
        setLogros([...logros, response.data]);
        Swal.fire("Éxito", "Logro creado correctamente", "success");
      }

      setNewLogro({ titulo: "", descripcion: "", fecha: "", categoria: "" });
      setEditingLogro(null);
      closeModal();
    } catch (error) {
      setError("No se pudo guardar el logro.");
      Swal.fire("Error", "No se pudo guardar el logro", "error");
      console.error(error);
    }
  };

  // Eliminar logro
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/logros/${id}`);
      setLogros(logros.filter((logro) => logro._id !== id));
      Swal.fire("Éxito", "Logro eliminado correctamente", "success");
    } catch (error) {
      setError("No se pudo eliminar el logro.");
      Swal.fire("Error", "No se pudo eliminar el logro", "error");
      console.error(error);
    }
  };

  // Editar logro
  const handleEdit = (logro) => {
    setEditingLogro(logro);
    setNewLogro({
      titulo: logro.titulo,
      descripcion: logro.descripcion,
      fecha: logro.fecha.split("T")[0],
      categoria: logro.categoria,
    });
    openModal();
  };

  return (
    <div>
      {/* Botón circular */}
      <button className="circular-button" onClick={openModal}>
        ✏️
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              ✖️
            </button>
            <h2>{editingLogro ? "Editar Logro" : "Añadir Nuevo Logro"}</h2>

            {/* Tabla de logros */}
            <table className="tabla-logros">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Fecha</th>
                  <th>Categoría</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {logros.map((logro) => (
                  <tr key={logro._id}>
                    <td>{logro.titulo}</td>
                    <td>{logro.descripcion}</td>
                    <td>{new Date(logro.fecha).toLocaleDateString()}</td>
                    <td>{logro.categoria}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(logro)}
                      >
                        ✏️
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(logro._id)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Formulario para añadir o editar un logro */}
            <form className="form-logro" onSubmit={handleSubmit}>
              <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={newLogro.titulo}
                onChange={handleChange}
                required
                className="form-input"
              />
              <textarea
                name="descripcion"
                placeholder="Descripción"
                value={newLogro.descripcion}
                onChange={handleChange}
                required
                className="form-input"
              ></textarea>
              <input
                type="date"
                name="fecha"
                value={newLogro.fecha}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                value={newLogro.categoria}
                onChange={handleChange}
                required
                className="form-input"
              />
              <button type="submit" className="submit-button">
                {editingLogro ? "Actualizar Logro" : "Guardar Logro"}
              </button>
            </form>

            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Editar;
