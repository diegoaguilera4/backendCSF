import Visitas from "../models/permisoVisitas.js";
import miDB from "../db/index.js";

// agregar una visita
export const agregarVisita = async (req, res) => {
  try {
    const nuevaVisita = new Visitas(req.body);

    await nuevaVisita.save();

    res.status(201).json(nuevaVisita);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// obtener todas las visitas
export const obtenerVisitas = async (req, res) => {
  try {
    const visitas = await Visitas.find();

    res.status(200).json(visitas);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// obtener una visita por id
export const obtenerVisitaPorId = async (req, res) => {
  try {
    const visita = await Visitas.findById(req.params.id);
    res.status(200).json(visita);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// actualizar una visita por id
export const actualizarVisita = async (req, res) => {
  try {
    const visita = await Visitas.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(visita);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// eliminar una visita por id
export const eliminarVisita = async (req, res) => {
  try {
    const visita = await Visitas.findByIdAndDelete(req.params.id);
    res.status(200).json(visita);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// obtener una visita por rut
export const obtenerVisitaPorRut = async (req, res) => {
  try {
    const { rut, fecha } = req.params;

    // Verificar si se proporcionó la fecha en los parámetros de la URL
    if (!fecha) {
      return res.status(400).json({ mensaje: 'La fecha es requerida en los parámetros de la URL.' });
    }

    const visita = await Visitas.findOne({ rut });

    // Verificar si la visita fue encontrada
    if (!visita) {
      return res.status(404).json({ mensaje: 'Visita no encontrada.' });
    }

    // Verificar si la fecha está dentro del rango de la visita
    const fechaInicio = new Date(visita.fechaInicio);
    const fechaTermino = new Date(visita.fechaTermino);
    const fechaBuscada = new Date(fecha);

    if (fechaBuscada >= fechaInicio && fechaBuscada <= fechaTermino) {
      return res.status(200).json(visita);
    } else {
      return res.status(404).json({ mensaje: 'La fecha no está dentro del rango de la visita.' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};