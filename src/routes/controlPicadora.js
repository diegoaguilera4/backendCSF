import express from 'express';
import{
    agregarControlPicadora,
    obtenerControlesPicadora,
    obtenerControlPicadoraPorId,
    actualizarControlPicadora,
    eliminarControlPicadora
} from '../controllers/controlPicadora.js';

const controlPicadora = express.Router();

controlPicadora.post('/agregar', agregarControlPicadora);
controlPicadora.get('/obtenerTodos', obtenerControlesPicadora);
controlPicadora.get('/obtener/:id', obtenerControlPicadoraPorId);
controlPicadora.put('/actualizar/:id', actualizarControlPicadora);
controlPicadora.delete('/eliminar/:id', eliminarControlPicadora);

export default controlPicadora;