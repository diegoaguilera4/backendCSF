import Registro from "../models/registro.js";
import miDB from "../db/index.js";


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

    // Obtener la fecha actual en GMT-3
    const fechaActual = new Date();
    fechaActual.setHours(fechaActual.getHours() - 3);

    // Crear el nuevo registro con la fecha ajustada
    const nuevoRegistro = new Registro({ ...req.body, tipo: tipo, fechaHora: fechaActual });

    // Guardar el nuevo registro en la base de datos
    await nuevoRegistro.save();

    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};


// obtener todos los registros
export const obtenerRegistros = async (req, res) => {
  try {
    const registros = await Registro.find().populate({
      path: 'persona',
      select: 'nombre rut d_cencos d_cargo',
    });

    // Transformar los resultados para que "persona" sea un objeto con campos individuales
    const registrosTransformados = registros.map((registro) => ({
      _id: registro._id,
      nombre: registro.persona.nombre,
      rut: registro.persona.rut,
      d_cencos: registro.persona.d_cencos,
      d_cargo: registro.persona.d_cargo,
      fechaHora: registro.fechaHora,
      tipo: registro.tipo,
      __v: registro.__v,
    }));

    res.status(200).json(registrosTransformados);
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
