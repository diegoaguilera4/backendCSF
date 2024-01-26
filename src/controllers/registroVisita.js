import RegistroVisita from "../models/registroVisita.js";
import miDB from "../db/index.js";

//agregar registro de visita
export const agregarRegistroVisita = async (req, res) => {
  try {
    const permiso = req.body.permiso;
    const ultimoRegistro = await RegistroVisita.findOne({ permiso: permiso }).sort({
      $natural: -1,
    });

    let tipo = "entrada";
    if (ultimoRegistro) {
      tipo = ultimoRegistro.tipo === "entrada" ? "salida" : "entrada";
    }

    // Obtener la fecha actual en GMT-3
    const fechaActual = new Date();
    fechaActual.setHours(fechaActual.getHours() - 3);

    // Crear el nuevo registro con la fecha ajustada
    const nuevoRegistro = new RegistroVisita({ ...req.body, tipo: tipo, fechaHora: fechaActual });

    // Guardar el nuevo registro en la base de datos
    await nuevoRegistro.save();

    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// obtener todos los registros de visita
export const obtenerRegistrosVisitas = async (req, res) => {
  try {
    const registrosVisita = await RegistroVisita.find().populate("permiso");
    const registrosTransformados = registrosVisita.map((registroVisitas) => ({
      _id: registroVisitas._id,
      nombre: registroVisitas.permiso.nombre,
      rut: registroVisitas.permiso.rut,
      motivo: registroVisitas.permiso.motivo,
      fechaHora: registroVisitas.fechaHora,
      tipo: registroVisitas.tipo,
    }));
    res.status(200).json(registrosTransformados);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// obtener un registro de visita por id
export const obtenerRegistroVisitaPorId = async (req, res) => {
  try {
    const registroVisita = await RegistroVisita.findById(
      req.params.id
    ).populate("permiso");
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
