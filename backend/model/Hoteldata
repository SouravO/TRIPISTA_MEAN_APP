const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Hotels');
const Schema = mongoose.Schema;

var HotelsSchema = new Schema({
    // hotelId : Number,
    hotelName : String,
    hotelStarrating : String,
    hotelPrice : String,
    hotelAddress : String,
    hotelContact : String,
    hotelWebsite : String,
    hotelImageUrl : String,
});

var Hoteldata = mongoose.model('hotel', HotelsSchema);

module.exports = Hoteldata;