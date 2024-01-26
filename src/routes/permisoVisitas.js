import express from 'express';
import {
    agregarVisita,
    obtenerVisitas,
    obtenerVisitaPorId,
    actualizarVisita,
    eliminarVisita,
    obtenerVisitaPorRut
} from '../controllers/permisoVisitas.js';

const permisoVisita = express.Router();

permisoVisita.post('/agregar', agregarVisita);
permisoVisita.get('/obtenerTodos', obtenerVisitas);
permisoVisita.get('/obtener/:id', obtenerVisitaPorId);
permisoVisita.get('/obtenerRut/:rut', obtenerVisitaPorRut);
permisoVisita.put('/actualizar/:id', actualizarVisita);
permisoVisita.delete('/eliminar/:id', eliminarVisita);

export default permisoVisita;
