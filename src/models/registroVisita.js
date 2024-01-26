import mongoose from "mongoose";
import { Schema } from "mongoose";

const registroVisitaSchema = new Schema({
    permiso: { type: Schema.Types.ObjectId, ref: "Permiso Visita", required: true },
    fechaHora: { type: Date, required: true},
    tipo: { type: String, required: true },
});

const RegistroVisita = mongoose.model("Registro visitas", registroVisitaSchema);

export default RegistroVisita;