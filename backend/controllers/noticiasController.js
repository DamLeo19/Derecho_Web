const Noticias = require('../models/Noticia'); // Asegúrate de que tienes el modelo de la noticia

// Agregar noticia
exports.addNoticia = async (req, res) => {
  const { nombre, fecha, descripcion } = req.body;

  try {
    const newNoticia = new Noticias({
      nombre,
      fecha,
      descripcion,
    });

    await newNoticia.save();
    res.status(201).json({ message: 'Noticia agregada exitosamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al agregar la noticia', details: error });
  }
};
