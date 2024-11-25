const Noticia = require('../models/Noticia');

// Agregar una noticia
exports.addNoticia = async (req, res) => {
  const { nombre, fecha, descripcion } = req.body;
  try {
    const newNoticia = new Noticia({ nombre, fecha, descripcion });
    await newNoticia.save();
    res.status(201).json({ message: 'Noticia agregada exitosamente', noticia: newNoticia });
  } catch (error) {
    res.status(400).json({ error: 'Error al agregar la noticia', details: error });
  }
};

// Obtener todas las noticias
exports.getNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.json(noticias);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener noticias', details: error });
  }
};

// Actualizar una noticia
exports.updateNoticia = async (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, descripcion } = req.body;
  try {
    const updatedNoticia = await Noticia.findByIdAndUpdate(
      id,
      { nombre, fecha, descripcion },
      { new: true, runValidators: true }
    );
    if (!updatedNoticia) return res.status(404).json({ error: 'Noticia no encontrada' });
    res.json({ message: 'Noticia actualizada exitosamente', noticia: updatedNoticia });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la noticia', details: error });
  }
};

// Eliminar una noticia
exports.deleteNoticia = async (req, res) => {
  const { id } = req.params;
  try {
    await Noticia.findByIdAndDelete(id);
    res.json({ message: 'Noticia eliminada' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar la noticia', details: error });
  }
};
