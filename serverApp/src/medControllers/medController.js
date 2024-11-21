const knex = require('../database/index');

module.exports = {

    async raiz(req,res) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do Servidor');
    },

    async medico(req,res) {
        const result = await knex('medico');
        return res.json(result);
    },

    async create(req,res) {
        try {
            const {med_nome,med_crm,esp_cod} = req.body;
            await knex('medico').insert({
                med_crm,med_nome,esp_cod,
            });
            return res.status(201).send();
    }
    catch(erro) {
        console.log(erro);
    }
   },

   async update(req,res) {
    try {
         const {med_crm} = req.params;
         const {med_nome,esp_cod} = req.body;
        await knex('medico').update(
             {
                med_crm,med_nome,esp_cod,

             }).where({med_crm});
        return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   },

   async delete(req,res) {
    try {
        const {med_crm} = req.params;
        await knex('medico').del().where({med_crm});
        return res.send();
   }
   catch (error)
   {
    console.log(error);
   }
   }
}