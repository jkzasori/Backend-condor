
const Models = require('../models');

const create = function(request, response) {
    const specialtiesToCreate = {
        name: request.payload.name, 
        createdBy: request.payload.createdBy,
        createdAt: new Date(),
    }
    console.log('Object to create: ', specialtiesToCreate);
    Models.Specialties.create(specialtiesToCreate)
        .then((data) => {
            console.log('Specialties created :) ');
            return response({
                type: 'Create',
                message: 'Specialties created :) ',
                data
            }).code(201); 
        })
        .catch((err) => {
            console.log(' :( Error creating a specialties: ', err.message);
            return response({
                type: 'Create',
                message: ' :( Error creating the specialties',
                err: err.message
            }).code(500); 
        });
}

module.exports = create;