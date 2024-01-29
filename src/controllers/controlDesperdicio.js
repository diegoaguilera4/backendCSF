import ControlDesperdicio from "../models/controlDesperdicio.js";
import miDB from "../db/index.js";
import MongoClient from "mongodb";

//agregar un nuevo control de desperdicio con la variable idAux en incremental
export const agregarControlDesperdicio = async (req, res) => {
  try {
    const nuevoControlDesperdicio = new ControlDesperdicio(req.body);
    const ultimoControlDesperdicio = await ControlDesperdicio.findOne().sort({
      idAux: -1,
    });
    let idAux = 1;
    if (ultimoControlDesperdicio) {
      idAux = ultimoControlDesperdicio.idAux + 1;
    }
    nuevoControlDesperdicio.idAux = idAux;
    await nuevoControlDesperdicio.save();
    res.status(201).json(nuevoControlDesperdicio);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// obtener todos los controles de desperdicio
export const obtenerControlDesperdicio = async (req, res) => {
  try {
    const controlesDesperdicio = await ControlDesperdicio.find();
    res.status(200).json(controlesDesperdicio);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

// obtener un control de desperdicio por id
export const obtenerControlDesperdicioPorId = async (req, res) => {
  try {
    const controlDesperdicio = await ControlDesperdicio.findById(req.params.id);
    if (!controlDesperdicio) {
      return res
        .status(404)
        .json({
          mensaje: "No se encontró el registro con el idAux proporcionado.",
        });
    }
    res.status(200).json(controlDesperdicio);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

//obtener version de control de desperdicio por id y nroRevision
export const obtenerVersionControlDesperdicioPorId = async (req, res) => {
  try {
    const controlDesperdicio = await ControlDesperdicio.findById(req.params.id);
    const version = controlDesperdicio.versiones.find(
      (version) => version.nroRevision == req.params.nroRevision
    );
    if (!version) {
      return res
        .status(404)
        .json({
          mensaje:
            "No se encontró la versión con el nroRevision proporcionado.",
        });
    }
    //agregar cantidad de versiones a la version
   
    //Crear objeto con la cantidad de versiones y la version
    const versionAux = {
      cantidadVersiones: controlDesperdicio.versiones.length,
      version: version,
    };
    res.status(200).json(versionAux);
    
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

export const actualizarControlDesperdicio = async (req, res) => {
  try {
    const controlDesperdicio = await ControlDesperdicio.findById(req.params.id);

    if (!controlDesperdicio) {
      return res
        .status(404)
        .json({
          mensaje: "No se encontró el registro con el idAux proporcionado.",
        });
    }

    // Agrega la nueva versión al array de versiones
    controlDesperdicio.versiones.push(req.body);

    // Guarda el documento actualizado
    await controlDesperdicio.save();

    res.status(200).json(controlDesperdicio);
  } catch (error) {
    console.error("Error al actualizar la versión de control:", error);
    res.status(500).json({ mensaje: "Error interno del servidor." });
  }
};

// eliminar un control de desperdicio por id
export const eliminarControlDesperdicio = async (req, res) => {
  try {
    const controlDesperdicio = await ControlDesperdicio.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(controlDesperdicio);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
