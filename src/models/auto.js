import mongoose from "mongoose";
const { Schema } = mongoose;



const Auto = mongoose.model("Auto", autosSchema);

export default Auto;
