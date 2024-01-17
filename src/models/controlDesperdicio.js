import mongoose from "mongoose";
import { Schema } from "mongoose";

const controlDesperdicioSchema = new Schema({
    nroRevision: {type: Number, required: true},
    area: {type: String, required: true},
    areaOtra: {type: String},
    fecha: {type: Date, default: Date.now},
    turno: {type: Number, required: true},
    responsable: {type: String, required: true},
    defectoEnLamina: {type: String, required: true},
    defectoEnLaminaOtros: {type: String},
    causaLamina: {type: String},
    defectoEnCaja: {type: String, required: true},
    defectoEnCajaOtros: {type: String},
    causaCaja: {type: String},
    operadorPicadora: {type: String, required: true},
    cliente: {type: String, required: true},
    producto: {type: String, required: true},
    cantidad: {type: Number, required: true},
    nroOp: {type: Number, required: true},
    autorizaPicar: {type: String, required: true},
    totalKilos: {type: Number, required: true}
});



const ControlDesperdicio = mongoose.model("controlDesperdicio", controlDesperdicioSchema);

export default ControlDesperdicio;