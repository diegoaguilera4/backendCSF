import express from 'express';
import {
    agregarVisita,
    obtenerVisitas,
    obtenerVisitaPorId,
    actualizarVisita,
    eliminarVisita,
    obtenerVisitaPorRut
} from '../controllers/visitas.js';

const visita = express.Router();

visita.post('/agregar', agregarVisita);
visita.get('/obtenerTodos', obtenerVisitas);
visita.get('/obtener/:id', obtenerVisitaPorId);
visita.get('/obtenerRut/:rut', obtenerVisitaPorRut);
visita.put('/actualizar/:id', actualizarVisita);
visita.delete('/eliminar/:id', eliminarVisita);

export default visita;
