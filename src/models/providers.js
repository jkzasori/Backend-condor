const Mongoose = require('mongoose');
const Connection = require('./connection');

const specialitySchema = {
    _id: { type: Mongoose.Schema.Types.ObjectId },
    name: { type: String },
    createdBy: { type: Number },
    createdAt: { type: Date },
    updatedBy: { type: Number },
    updatedAt: { type: Date }
};

const ProvidersSchema = new Mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    middleName: { type: String },
    email: { type: String },
    projectStartDate: { type: Date },
    employerId: { type: Number },
    providerType: { type: String },
    staffStatus: { type: String },
    assignedTo: { type: Number },
    status: { type: String },
    createdBy: { type: Number },
    createdAt: { type: Date },
    updatedBy: { type: Number },
    updatedAt: { type: Date },
    specialty: specialitySchema 
});

module.exports = Mongoose.model('providers', ProvidersSchema);