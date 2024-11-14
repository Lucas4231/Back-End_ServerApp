const knex = require('../database/index');

module.exports = {

    async raiz(req,res) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do Servidor');
    },

    async funcs(req,res) {
        const result = await knex('func');
        return res.json(result);
    },

    async create(req,res) {
    try {
        const {fun_mat}    = req.body;
        const {fun_nome}   = req.body;
        const {fun_genero} = req.body;
        const {fun_dt_adm} = req.body;
        const {fun_salar}  = req.body;
        const {dep_cod}    = req.body;
        const {car_cod}    = req.body;
        await knex('func').insert({
            fun_mat,
            fun_nome,
            fun_genero,
            fun_dt_adm,
            fun_salar,
            dep_cod,
            car_cod,
        });
        return res.status(201).send();
    }
    catch(erro) {
        console.log(erro);
    }
   },

   async update(req,res) {
   try {
       const {fun_mat}    = req.params;
       const {fun_nome}   = req.body;
       const {fun_genero} = req.body;
       const {fun_dt_adm} = req.body;
       const {fun_salar}  = req.body;
       const {dep_cod}    = req.body;
       const {car_cod}    = req.body;
       await knex('func').update(
            {fun_nome,
             fun_genero,
             fun_dt_adm,
             fun_salar,
             dep_cod,
             car_cod,
            }).where({fun_mat});
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
        
       const {fun_mat} = req.params;
       await knex('func').del().where({fun_mat});
       return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   }
}