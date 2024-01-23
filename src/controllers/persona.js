import Persona from "../models/persona.js";
import miDB from "../db/index.js";

// agregar una nueva persona
export const agregarPersona = async (req, res) => {
  try {
    const nuevaPersona = new Persona(req.body);
    await nuevaPersona.save();
    res.status(201).json(nuevaPersona);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// obtener todas las personas
export const obtenerPersonas = async (req, res) => {
  try {
    const personas = await Persona.find();
    res.status(200).json(personas);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// obtener una persona por id
export const obtenerPersonaPorId = async (req, res) => {
  try {
    const persona = await Persona.findById(req.params.id);
    res.status(200).json(persona);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

//obtener persona por rut
export const obtenerPersonaPorRut = async (req, res) => {
  try {
    const persona = await Persona.findOne({ rut: req.params.rut });
    res.status(200).json(persona);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// actualizar una persona por id
export const actualizarPersona = async (req, res) => {
  try {
    const persona = await Persona.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(persona);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// eliminar una persona por id
export const eliminarPersona = async (req, res) => {
  try {
    const persona = await Persona.findByIdAndDelete(req.params.id);
    res.status(200).json(persona);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};


