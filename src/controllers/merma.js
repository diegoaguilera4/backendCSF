import Merma from "../models/merma.js";
import miDB from "../db/index.js";

// agregar una nueva merma
export const agregarMerma = async (req, res) => {
  try {
    const nuevaMerma = new Merma(req.body);
    await nuevaMerma.save();
    res.status(201).json(nuevaMerma);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// obtener todas las mermas
export const obtenerMermas = async (req, res) => {
  try {
    const mermas = await Merma.find();
    res.status(200).json(mermas);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// obtener una merma por id
export const obtenerMermaPorId = async (req, res) => {
  try {
    const merma = await Merma.findById(req.params.id);
    if (merma == null) {
      res.status(404).json({ mensaje: "Merma no encontrada" });
    } else {
      res.status(200).json(merma);
    }
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// actualizar una merma por id
export const actualizarMerma = async (req, res) => {
  try {
    const merma = await Merma.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(merma);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// eliminar una merma por id
export const eliminarMerma = async (req, res) => {
  try {
    const merma = await Merma.findByIdAndDelete(req.params.id);
    res.status(200).json(merma);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};