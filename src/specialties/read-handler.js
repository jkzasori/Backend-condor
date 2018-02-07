// Import Models
const Models = require('../models');

const read = function(request, response) {
    console.log('Object to read: ', request.query);
    const limitQuery = parseInt(request.query.limit) || 0

    Models.Providers.find({
        $or: [
            { name: request.query.name }
        ]
    })
        .limit(limitQuery) 
        .then((data) => {
            console.log('Specialties finded :) ');
            return response({
                type: 'Read',
                message: 'Read specialties :) ',
                data
            }).code(200); 
        })
        .catch((err) => {
            console.log(' :( Error finding a specialties: ', err.message);
            return response({
                type: 'Read',
                message: ' :( Error finding the specialties',
                err: err.message
            }).code(500); 
        });
}

module.exports = read;