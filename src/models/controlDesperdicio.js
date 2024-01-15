import mongoose from "mongoose";
import { Schema } from "mongoose";

const controlDesperdicioSchema = new Schema({
    codigoDocumento: {type: String, required: true},
    nroRevision: {type: Number, required: true},
    area: {type: String, required: true},
    fecha: {type: Date, required: true},
    responsable: {type: String, required: true},
    defectoEnLamina: {type: String, required: true},
    causaLamina: {type: String, required: true},
    defectoEnCaja: {type: String, required: true},
    causaCaja: {type: String, required: true},
    operadorPicadora: {type: String, required: true},
    cliente: {type: String, required: true},
    producto: {type: String, required: true},
    cantidad: {type: Number, required: true},
    nroOP: {type: Number, required: true},
    totalKilos: {type: Number, required: true}
});

const ControlDesperdicio = mongoose.model("controlDesperdicio", controlDesperdicioSchema);

export default ControlDesperdicio;