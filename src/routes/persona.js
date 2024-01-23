import express from 'express';
import{
    agregarPersona,
    obtenerPersonas,
    obtenerPersonaPorId,
    actualizarPersona,
    eliminarPersona

} from '../controllers/persona.js';

const persona = express.Router();

persona.post('/agregar', agregarPersona);
persona.get('/obtenerTodos', obtenerPersonas);
persona.get('/obtener/:id', obtenerPersonaPorId);
persona.put('/actualizar/:id', actualizarPersona);
persona.delete('/eliminar/:id', eliminarPersona);

export default persona;