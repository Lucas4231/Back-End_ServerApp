const express = require('express');

const routes = express.Router();
const deptController = require('./deptControllers/deptController');
const cargController = require('./cargControllers/cargController');
const funcController = require('./funcControllers/funcController');
const userController = require('./userControllers/userController');

routes.get('/',deptController.raiz);
routes.get('/deptos',deptController.deptos);
routes.post('/deptos',deptController.create);
routes.put('/deptos/:dep_cod',deptController.update);
routes.delete('/deptos/:dep_cod',deptController.delete);

routes.get('/',cargController.raiz);
routes.get('/cargos',cargController.cargos);
routes.post('/cargos',cargController.create);
routes.put('/cargos/:car_cod',cargController.update);
routes.delete('/cargos/:car_cod',cargController.delete);

routes.get('/',funcController.raiz);
routes.get('/funcs',funcController.funcs);
routes.post('/funcs',funcController.create);
routes.put('/funcs/:fun_mat',funcController.update);
routes.delete('/funcs/:fun_mat',funcController.delete);

routes.get('/',userController.raiz);
routes.get('/users',userController.users);
routes.post('/users',userController.create);

module.exports = routes;