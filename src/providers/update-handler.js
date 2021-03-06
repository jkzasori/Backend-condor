const Models = require('../models');

const update = function(request, response) {
    console.log('Update provider id: ', request.params.providerId);
    console.log('Update params: ', request.payload);
    const updateFields = {
        status: request.payload.status,
        updatedAt: new Date()
    }
    Models.Providers.update({
        _id: request.params.providerId
    }, {
        $set: updateFields 
    })
    .then((data) => {
        console.log('Provider updated success');
        return response({
            type: 'Update',
            message: 'Provider updated success',
        }).code(200); 
    })
    .catch((err) => {
        console.log('Error updating document: ', err.message);
        return response({
            type: 'Update',
            message: 'Error updating document',
            err: err.message
        }).code(500); 
    });
};

module.exports = update;