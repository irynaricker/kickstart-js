const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pickupSchema = new Schema({
    pickUpUser: String,
    produceId : String,
    growerId: String,
    pickUpDate: Date,
    pickUpAmount: Number
});

mongoose.model('pickup', pickupSchema);
