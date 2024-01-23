import mongoose from "mongoose";
import { Schema } from "mongoose";

const registroSchema = new Schema({
    persona: { type: Schema.Types.ObjectId, ref: "Persona", required: true },
    fechaHora: { type: Date, required: true, default: Date.now()},
    tipo: { type: String},
});

const Registro = mongoose.model("Registro", registroSchema);

export default Registro;