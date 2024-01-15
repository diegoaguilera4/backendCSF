import express from 'express';
import{
    agregarControlDesperdicio,
    obtenerControlDesperdicio,
    obtenerControlDesperdicioPorId,
    actualizarControlDesperdicio,
    eliminarControlDesperdicio
} from '../controllers/controlDesperdicio.js';

const controlDesperdicio = express.Router();

controlDesperdicio.post('/agregar', agregarControlDesperdicio);
controlDesperdicio.get('/obtenerTodos', obtenerControlDesperdicio);
controlDesperdicio.get('/obtener/:id', obtenerControlDesperdicioPorId);
controlDesperdicio.put('/actualizar/:id', actualizarControlDesperdicio);
controlDesperdicio.delete('/eliminar/:id', eliminarControlDesperdicio);

export default controlDesperdicio;