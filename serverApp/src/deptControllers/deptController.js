const knex = require('../database/index');

module.exports = {

    async raiz(req,res) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do Servidor');
    },

    async deptos(req,res) {
        const result = await knex('depart');
        return res.json(result);
    },

    async create(req,res) {
    try {
        const {dep_nome} = req.body;
        await knex('depart').insert({
            dep_nome,
        });
        return res.status(201).send();
    }
    catch(erro) {
        console.log(erro);
    }
   },

   async update(req,res) {
   try {
       const {dep_cod} = req.params;
       const {dep_nome} = req.body;
       await knex('depart').update(
            {dep_nome,

            }).where({dep_cod});
       return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   },

   async delete(req,res) {
   try {
        console.log('passei aqui');
        
       const {dep_cod} = req.params;
       await knex('depart').del().where({dep_cod});
       return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   }
}