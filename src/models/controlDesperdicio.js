import mongoose from "mongoose";
import { Schema } from "mongoose";

const versionControlSchema = new Schema({
    nroRevision: { type: Number, required: true },
    tipo: { type: String, required: true },
    area: { type: String, required: true },
    defecto: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    turno: { type: Number, required: true },
    responsable: { type: String, required: true },
    cliente: { type: String, required: true },
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true },
    nroOp: { type: String, required: true },
    estNumber: { type: String, required: true },
});

const controlDesperdicioSchema = new Schema({
  idAux: { type: Number, default: 1, unique: true },
  versiones: [versionControlSchema],
});

const ControlDesperdicio = mongoose.model(
  "controlDesperdicio",
  controlDesperdicioSchema
);

export default ControlDesperdicio;
