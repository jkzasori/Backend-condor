const Mongoose = require('mongoose');
const Connection = require('./connection');

const SpecialtiesSchema = new Mongoose.Schema({
    name: { type: String },
    createdBy: { type: Number },
    createdAt: { type: Date },
    updatedBy: { type: Number },
    updatedAt: { type: Date }
});

module.exports = Mongoose.model('specialties', SpecialtiesSchema);