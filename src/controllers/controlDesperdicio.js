import ControlDesperdicio from '../models/controlDesperdicio.js';
import miDB from '../db/index.js';

// agregar un nuevo control de desperdicio
export const agregarControlDesperdicio = async (req, res) => {
    try {
        const nuevoControlDesperdicio = new ControlDesperdicio(req.body);
        await nuevoControlDesperdicio.save();
        res.status(201).json(nuevoControlDesperdicio);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

// obtener todos los controles de desperdicio
export const obtenerControlDesperdicio = async (req, res) => {
    try {
        const controlesDesperdicio = await ControlDesperdicio.find();
        res.status(200).json(controlesDesperdicio);
    } catch (error) {
        res.status(404).json({ mensaje: error.message });
    }
}

// obtener un control de desperdicio por id
export const obtenerControlDesperdicioPorId = async (req, res) => {
    try {
        const controlDesperdicio = await ControlDesperdicio.findById(req.params.id);
        res.status(200).json(controlDesperdicio);
    } catch (error) {
        res.status(404).json({ mensaje: error.message });
    }
}

// actualizar un control de desperdicio por id
export const actualizarControlDesperdicio = async (req, res) => {
    try {
        const controlDesperdicio = await ControlDesperdicio.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(controlDesperdicio);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

// eliminar un control de desperdicio por id
export const eliminarControlDesperdicio = async (req, res) => {
    try {
        const controlDesperdicio = await ControlDesperdicio.findByIdAndDelete(req.params.id);
        res.status(200).json(controlDesperdicio);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
