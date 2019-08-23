const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    resourceType: String,
    name: String,
    area: String,
    operator: String,
    address: String,
    website: String,
    email: String,
    phoneNumber: String,
    hours: String,
    walkIn: String,
    eligibility: String
})

module.exports = mongoose.model('Resource', resourceSchema);