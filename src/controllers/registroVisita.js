import RegistroVisita from "../models/registroVisita.js";
import miDB from "../db/index.js";

//agregar registro de visita
export const agregarRegistroVisita = async (req, res) => {
  try {
    const nuevoRegistroVisita = new RegistroVisita(req.body);
    await nuevoRegistroVisita.save();
    res.status(201).json(nuevoRegistroVisita);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// obtener todos los registros de visita
export const obtenerRegistrosVisitas = async (req, res) => {
  try {
    const registrosVisita = await RegistroVisita.find().populate("permiso");
    res.status(200).json(registrosVisita);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// obtener un registro de visita por id
export const obtenerRegistroVisitaPorId = async (req, res) => {
  try {
    const registroVisita = await RegistroVisita.findById(req.params.id).populate("permiso");
    res.status(200).json(registroVisita);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// actualizar un registro de visita por id
export const actualizarRegistroVisita = async (req, res) => {
  try {
    const registroVisita = await RegistroVisita.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(registroVisita);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// eliminar un registro de visita por id
export const eliminarRegistroVisita = async (req, res) => {
  try {
    const registroVisita = await RegistroVisita.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(registroVisita);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
