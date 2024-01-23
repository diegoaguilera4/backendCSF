import mongoose from "mongoose";
const { Schema } = mongoose;

const personaSchema = new Schema({
    nombre: { type: String, required: true },
    rut: { type: String, required: true, unique: true},
    autos: [
        {
            marca: { type: String, required: true },
            modelo: { type: String, required: true },
            patente: { type: String, required: true, unique: true},
            color: { type: String, required: true },
        }
    ],
});

const Persona = mongoose.model("Persona", personaSchema);

export default Persona;
