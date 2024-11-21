const knex = require('../database/index');

module.exports = {

    async raiz(req,res) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do Servidor');
    },

    async usuario(req,res) {
        const result = await knex('usuario');
        return res.json(result);
    },

    async create(req,res) {
    try {
        const {usu_nome,usu_senha} = req.body;
        await knex('usuario').insert({
            usu_nome,usu_senha,
        });
        return res.status(201).send();
    }
    catch(erro) {
        console.log(erro);
    }
   },

   async update(req,res) {
   try {
       const {usu_id} = req.params;
       const {usu_nome,usu_senha} = req.body;
       await knex('usuario').update(
            {usu_nome,usu_senha,

            }).where({usu_id});
       return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   },

   async delete(req,res) {
   try {

       const {usu_id} = req.params;
       await knex('usuario').del().where({usu_id});
       return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   }
}