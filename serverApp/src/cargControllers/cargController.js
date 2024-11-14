const knex = require('../database/index');

module.exports = {

    async raiz(req,res) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do Servidor');
    },

    async cargos(req,res) {
        const result = await knex('cargo');
        return res.json(result);
    },

    async create(req,res) {
    try {
        const {car_nome} = req.body;
        await knex('cargo').insert({
            car_nome,
        });
        return res.status(201).send();
    }
    catch(erro) {
        console.log(erro);
    }
   },

   async update(req,res) {
   try {
       const {car_cod} = req.params;
       const {car_nome} = req.body;
       await knex('cargo').update(
            {car_nome,
            }).where({car_cod});
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
        
       const {car_cod} = req.params;
       await knex('cargo').del().where({car_cod});
       return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   }
}