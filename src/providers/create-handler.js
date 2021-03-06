// Import Models
const Models = require('../models');

const create = function(request, response) {
    const providerToCreate = {
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
        middleName: request.payload.middleName,
        email: request.payload.email,
        'projectedStartDate': new Date(request.payload.projectedStartDate), // Cast to ISO date the timestamp, remember, the timestamp in javascript is in milliseconds
        employerId: request.payload.employerId,
        providerType: request.payload.providerType,
        staffStatus: request.payload.staffStatus,
        assignedTo: request.payload.assignedTo,
        status: request.payload.status,
        createdBy: request.payload.createdBy,
        createdAt: new Date(),
        'specialty._id': request.payload.specialtyId,
        'specialty.name': request.payload.specialtyName,
        'specialty.createdBy': request.payload.specialtyCreatedBy,
        'specialty.createdAt': new Date(),
    }
    console.log('Object to create: ', providerToCreate);

    Models.Providers.create(providerToCreate)
        .then((data) => {
            console.log('Provider created success :) ');
            return response({
                type: 'Create',
                message: 'Provider created success :) ',
                data
            }).code(201); 
        })
        .catch((err) => {
            console.log('Error creating a provider: ', err.message);
            return response({
                type: 'Create',
                message: 'Error creating provider',
                err: err.message
            }).code(500); 
        });
}

module.exports = create;