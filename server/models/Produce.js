const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produceSchema = new Schema({
    userId: String,
    produceId : String,
    produceType: String,
    variety: String,
    produceAmount: Number,
    produceName: String,
    availability:{
        date: { type: Date, default: Date.now }
    },
    pickUpLocation: {
        address: String,
        city: String,
        state: String,
        zip: Number
    },
    organic: { type: Boolean, default: false },
    seedSource: String,
    description: String
});


mongoose.model('produce', produceSchema);
