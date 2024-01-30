import mongoose from "mongoose";
import { Schema } from "mongoose";

const mermaSchema = new Schema({
    persona: { type: Schema.Types.ObjectId, ref: "Persona", required: true },
    turno: { type: Number, required: true },
    tipo: { type: String, required: true },
    patenteCamion: { type: String, required: true },
    empresaEnvia: { type: String, required: true },
    kilos: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
});

const Merma = mongoose.model("Merma", mermaSchema);

export default Merma;