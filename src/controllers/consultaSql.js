import getDocs from "../sqlServer.js";

export const obtenerDocumentoPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const documento = await getDocs(id);
        res.status(200).json(documento);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}