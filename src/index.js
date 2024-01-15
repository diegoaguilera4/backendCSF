const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config({ path: './src/.env'});

const app = express();
const port = process.env.PORT_SERVER || 3030;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});