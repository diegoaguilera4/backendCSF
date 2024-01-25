import mongoose from "mongoose";
const { Schema } = mongoose;

const personaSchema = new Schema({
    nombre: { type: String, required: true },
    rut: { type: String, required: true, unique: true},
    d_cencos: { type: String, required: true },
    d_cargo: { type: String, required: true }
});

const Persona = mongoose.model("Persona", personaSchema);

export default Persona;
