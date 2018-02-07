'use strict'

/* I use hapi because is easy to learn and I am not expert in javascript yet :p
    https://hapijs.com/tutorials*/

const Hapi = require('hapi');
const UUID = require("uuid");
const Joi = require('joi');
const Providers = require('./src/providers');
const Specialties = require('./src/specialties');


const Server = new Hapi.Server();
Server.connection({
    host: 'localhost',
    port: '3002'
});
Server.route({
    method: 'GET',
    path: '/',
    handler: function (request, response) {

        console.log('GET /'); 
        return response('Server Running').code(200);
    }
});

// Providers
Server.route({
    method: 'POST',
    path:'/provider', 
    handler: Providers.Create
});


Server.route({
    method: 'GET',
    path:'/provider', 
    handler: Providers.Read
});


Server.route({
    method: 'DELETE',
    path: '/provider/{providerId}', 
    handler: Providers.Remove
});


Server.route({
    method: 'PUT',
    path: '/provider/{providerId}',
    handler: Providers.Update
})

// Specialties 


Server.route({
    method: 'POST',
    path:'/specialties',
    handler: Specialties.Create
});


Server.route({
    method: 'GET',
    path:'/specialties',
    handler: Specialties.Read
});


Server.route({
    method: 'DELETE',
    path: '/specialties/{specialtiesId}',
    handler: Specialties.Remove
});


Server.route({
    method: 'PUT',
    path: '/specialties/{specialtiesId}',
    handler: Specialties.Update
})

// Start the server
Server.start((err) => {
    if (err) {
        console.log(':( Error starting the server: ', err.message);
        throw err;
    }
    console.log('Server listen at :) ', Server.info.uri);
});