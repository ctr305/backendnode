require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

var corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsOptions));

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use('/api/categorias', require('./routes/categorias.routes'));
app.use('/api/peliculas', require('./routes/peliculas.routes'));
app.get('*', (req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.SERVER_PORT}`);
});

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerFile));