import express from 'express';
import cors from 'cors'; // Debes importar 'cors' antes de usarlo
import dotenv from 'dotenv';
import persona from './routes/persona.js';
import registro from './routes/registro.js';
import permisoVisita from './routes/permisoVisitas.js';
import registroVisita from './routes/registroVisita.js';

//Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT_SERVER || 3030;

app.use(cors());

app.use(express.json());

app.use('/personas', persona);
app.use('/registros', registro);
app.use('/permisoVisitas', permisoVisita);
app.use('/registroVisitas', registroVisita);



app.get('/', (req, res) => {
    res.send('Hello World');    
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});