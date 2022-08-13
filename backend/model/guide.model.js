const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let guideSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    district: {
        type: String
    },
    state: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    dob: {
        type: String
    },
    id_proof: {
        type: String
    },
    biodata: {
        type: String
    }
},
{
    collection: 'guides'
}
);

module.exports = mongoose.model('GuideSchema', guideSchema)