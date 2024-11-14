const knex = require('../database/index');
const bcrypt = require('bcrypt');

module.exports = {

    async raiz(req,res) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do Servidor');
    },

    async users(req,res) {
        const result = await knex('user');
        return res.json(result);
    },

    async create(req,res,next) {
    try {
        const {usu_nome}   = req.body;
        const {usu_email}  = req.body;
        const {usu_level}  = req.body;
        const usu_senha  = await bcrypt.hash(req.body.usu_senha,10);

        const result =  await knex('user').where({usu_email});
            if (result.length === 1) {
                return res.status(400).send({error:'E-mail já cadastrado!'});
            }
            await knex('user').insert({usu_nome, usu_email, usu_senha, usu_level});
            return res.status(201).send({usu_nome,usu_email,usu_senha,usu_level});
        }
    catch(erro) {
        next(erro);
    }
   }

   
}
