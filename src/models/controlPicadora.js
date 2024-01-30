import mongoose from "mongoose";
import { Schema } from "mongoose";

const controlPicadoraSchema = new Schema({
  desperdicio: {
    type: Schema.Types.ObjectId,
    ref: "controlDesperdicio",
    required: true,
  },
  persona: { type: Schema.Types.ObjectId, ref: "Persona", required: true },
  turno: { type: Number, required: true },
  kilos: { type: Number, required: true },
});

const ControlPicadora = mongoose.model(
  "ControlPicadora",
  controlPicadoraSchema
);

export default ControlPicadora;
