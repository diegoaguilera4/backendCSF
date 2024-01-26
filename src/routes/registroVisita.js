import express from 'express';
import {
    agregarRegistroVisita,
    obtenerRegistrosVisitas,
    obtenerRegistroVisitaPorId,
    actualizarRegistroVisita,
    eliminarRegistroVisita
}
from '../controllers/registroVisita.js';

const registroVisita = express.Router();

registroVisita.post('/agregar', agregarRegistroVisita);
registroVisita.get('/obtenerTodos', obtenerRegistrosVisitas);
registroVisita.get('/obtener/:id', obtenerRegistroVisitaPorId);
registroVisita.put('/actualizar/:id', actualizarRegistroVisita);
registroVisita.delete('/eliminar/:id', eliminarRegistroVisita);

export default registroVisita;