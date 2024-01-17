import express from 'express';
import cors from 'cors'; // Debes importar 'cors' antes de usarlo
import dotenv from 'dotenv';
import controlDesperdicio from './routes/controlDesperdicio.js';

//Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT_SERVER || 3030;

app.use(cors());

app.use(express.json());

app.use('/api', controlDesperdicio);

app.get('/', (req, res) => {
    res.send('Hello World');    
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});