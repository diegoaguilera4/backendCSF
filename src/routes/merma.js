import express from 'express';
import {
    agregarMerma,
    obtenerMermas,
    obtenerMermaPorId,
    actualizarMerma,
    eliminarMerma
} from '../controllers/merma.js';

const merma = express.Router();

merma.post('/agregar', agregarMerma);
merma.get('/obtenerTodos', obtenerMermas);
merma.get('/obtener/:id', obtenerMermaPorId);
merma.put('/actualizar/:id', actualizarMerma);
merma.delete('/eliminar/:id', eliminarMerma);

export default merma;