import express from 'express';
import {obtenerDocumentoPorId} from '../controllers/consultaSql.js';

const consultaSql = express.Router();

consultaSql.get('/obtener/:id', obtenerDocumentoPorId);

export default consultaSql;