const express = require('express');

const routes = express.Router();
const espController = require('./espControllers/espController');
const medController = require('./medControllers/medController');

routes.get('/',espController.raiz);
routes.get('/espec',espController.espec);
routes.post('/espec',espController.create);
routes.put('/espec/:esp_cod',espController.update);
routes.delete('/espec/:esp_cod',espController.delete);

module.exports = routes;