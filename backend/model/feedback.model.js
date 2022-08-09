const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
 

let feedbackSchema = new Schema({
    traveller_name:{
        type: String
    },    

    travel_description:{
        type: String 
    }

},{

    collection: 'feedbacks'

}
);

module.exports =mongoose.model('FeedbackSchema', feedbackSchema)