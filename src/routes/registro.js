import express from 'express';
import {
    agregarRegistro,
    obtenerRegistros,
    obtenerRegistroPorId,
    actualizarRegistro,
    eliminarRegistro
} from '../controllers/registro.js';

const registro = express.Router();

registro.post('/agregar', agregarRegistro);
registro.get('/obtenerTodos', obtenerRegistros);
registro.get('/obtener/:id', obtenerRegistroPorId);
registro.put('/actualizar/:id', actualizarRegistro);
registro.delete('/eliminar/:id', eliminarRegistro);

export default registro;
