const knex = require('../database/index');

module.exports = {

    async raiz(req,res) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do Servidor');
    },

    async espec(req,res) {
        const result = await knex('espec');
        return res.json(result);
    },

    async create(req,res) {
    try {
        const {esp_nome} = req.body;
        await knex('espec').insert({
            esp_nome,
        });
        return res.status(201).send();
    }
    catch(erro) {
        console.log(erro);
    }
   },

   async update(req,res) {
   try {
       const {esp_cod} = req.params;
       const {esp_nome} = req.body;
       await knex('espec').update(
            {esp_nome,

            }).where({esp_cod});
       return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   },

   async delete(req,res) {
   try {

       const {esp_cod} = req.params;
       await knex('espec').del().where({esp_cod});
       return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   }
}