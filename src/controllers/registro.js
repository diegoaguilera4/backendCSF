import Registro from "../models/registro.js";
import miDB from "../db/index.js";

// agregar un nuevo registro
export const agregarRegistro = async (req, res) => {
  try {
    const persona = req.body.persona;
    const ultimoRegistro = await Registro.findOne({ persona: persona }).sort({
      $natural: -1,
    });
    let tipo = "entrada";
    if (ultimoRegistro) {
      tipo = ultimoRegistro.tipo === "entrada" ? "salida" : "entrada";
    }
    const nuevoRegistro = new Registro({ ...req.body, tipo: tipo });
    await nuevoRegistro.save();
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// obtener todos los registros
export const obtenerRegistros = async (req, res) => {
  try {
    const registros = await Registro.find();
    res.status(200).json(registros);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// obtener un registro por id
export const obtenerRegistroPorId = async (req, res) => {
  try {
    const registro = await Registro.findById(req.params.id);
    res.status(200).json(registro);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// actualizar un registro por id
export const actualizarRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// eliminar un registro por id
export const eliminarRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndDelete(req.params.id);
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
