const express = require('express');

const routes = express.Router();
const espController = require('./espControllers/espController');
const userController = require('./userControllers/userController');
const medController = require('./medControllers/medController');


routes.get('/',espController.raiz);
routes.get('/espec',espController.espec);
routes.post('/espec',espController.create);
routes.put('/espec/:esp_cod',espController.update);
routes.delete('/espec/:esp_cod',espController.delete);

routes.get('/',medController.raiz);
routes.get('/medico',medController.medico);
routes.post('/medico',medController.create);
routes.put('/medico/:med_crm',medController.update);
routes.delete('/medico/:med_crm',medController.delete);

routes.get('/',userController.raiz);
routes.get('/usuario',userController.usuario);
routes.post('/usuario',userController.create);
routes.put('/usuario/:usu_id',userController.update);
routes.delete('/usuario/:usu_id',userController.delete);

module.exports = routes;