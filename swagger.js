const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Backend Node.js API',
        description: 'API de películas en node.js',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc);