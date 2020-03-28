const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
const { Segments, celebrate, Joi } = require('celebrate');


routes.post('/sessions', SessionController.create);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

// routes.post('/ongs', async (request, response) => {

// });

// routes.get('/ongs', async (request, response) => {
//     const ongs = await connection('ongs').select('*');
//     return response.json(ongs);
// });

/**
 * Métodos HTTP:
 *  Get: buscar informação do backend
 *  POST: criar uma informação no backend
 *  PUT: alterar uma informação no backend
 *  DELETE: deletar uma informação no backend
 */

/**
 * Tipos de Parametros
 *  Query params: Parametros nomeados enviados na rota após "?" (filtros e etc). ex: /users?name=Neto
 *  Route params: Parametros utillizados para identificar recursos. ex: /users/id
 *  Request body: Corpo da requisição. Utilizado para criar ou alterar dados no server
 */

// routes.get('/', (request, response) => {
//     // return response.send('Olá mundo');
//     return response.json({
//         evento: 'Semana omnistack 11',
//         aluno: 'Anselmo Neto2'
//     });
// });

// routes.get('/users/:id', (request, response) => {
//     const params = request.params; // Route params
//     console.log(params);

//     // return response.send('Olá mundo');
//     return response.json({
//         evento: 'Semana omnistack 11',
//         aluno: 'Anselmo Neto'
//     });
// });

// routes.get('/users2', (request, response) => {
//     const params = request.query; // Query params ex /users?name=Neto
//     console.log(params);

//     // return response.send('Olá mundo');
//     return response.json({
//         evento: 'Semana omnistack 11',
//         aluno: 'Anselmo Neto'
//     });
// });

// routes.post('/newUser', (request, response) => {
//     const body = request.body; // Request body
//     console.log(body);

//     // return response.send('Olá mundo');
//     return response.json({
//         evento: 'Semana omnistack 11',
//         aluno: 'Anselmo Neto'
//     });
// });


module.exports = routes;