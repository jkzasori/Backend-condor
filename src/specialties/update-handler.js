const Models = require('../models');
const update = function(request, response) {
    console.log('Update specialties id: ', request.params.specialtiesId);
    console.log('Update params: ', request.payload);
    const updateFields = {
        status: request.payload.status,
        updatedAt: new Date()
    }
    Models.Specialties.update({
        _id: request.params.specialtiesId
    }, {
        $set: updateFields 
    })
    .then((data) => {
        console.log('Specialties updated :) ');
        return response({
            type: 'Update',
            message: 'Specialties updated :) ',
        }).code(200); 
    })
    .catch((err) => {
        console.log(':( Error updating document: ', err.message);
        return response({
            type: 'Update',
            message: ':( Error updating document',
            err: err.message
        }).code(500); 
    });
};

module.exports = update;
