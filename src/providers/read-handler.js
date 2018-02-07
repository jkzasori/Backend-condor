const Models = require('../models');

const read = function(request, response) {
    console.log('Object to read: ', request.query);
    const limitQuery = parseInt(request.query.limit) || 0
    Models.Providers.find({
        $or: [
            { firstName: request.query.firstName },
            { lastName: request.query.lastName },
            { email: request.query.email },
            { assignedTo: request.query.assignedTo },
            { status: request.query.status }
        ]
    })
        .limit(limitQuery) 
        .then((data) => {
            console.log('Provider finded :) ');
            return response({
                type: 'Read',
                message: 'Read provider :) ',
                data
            }).code(200); 
        })
        .catch((err) => {
            console.log(' :( Error finding a provider: ', err.message);
            return response({
                type: 'Read',
                message: ' :( Error finding provider',
                err: err.message
            }).code(500);
        });
}

module.exports = read;