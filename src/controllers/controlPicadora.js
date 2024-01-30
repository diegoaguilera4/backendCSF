import ControlPicadora from "../models/controlPicadora.js";
import miDB from "../db/index.js";

//agregar un nuevo control de picadora
export const agregarControlPicadora = async (req, res) => {
  try {
    const nuevoControlPicadora = new ControlPicadora(req.body);
    await nuevoControlPicadora.save();
    res.status(201).json(nuevoControlPicadora);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// obtener todos los controles de picadora
export const obtenerControlesPicadora = async (req, res) => {
  try {
    const controlesPicadora = await ControlPicadora.find().populate([
      {
        path: 'persona',
        select: 'nombre rut',
      },
      {
        path: 'desperdicio',
      }
    ]);
    res.status(200).json(controlesPicadora);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// obtener un control de picadora por id
export const obtenerControlPicadoraPorId = async (req, res) => {
  try {
    const controlPicadora = await ControlPicadora.findById(req.params.id);
    if (!controlPicadora) {
      return res.status(404).json({
        mensaje: "No se encontró el registro con el id proporcionado.",
      });
    }
    res.status(200).json(controlPicadora);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// actualizar un control de picadora por id
export const actualizarControlPicadora = async (req, res) => {
  try {
    const controlPicadora = await ControlPicadora.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(controlPicadora);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// eliminar un control de picadora por id
export const eliminarControlPicadora = async (req, res) => {
  try {
    const controlPicadora = await ControlPicadora.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(controlPicadora);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};