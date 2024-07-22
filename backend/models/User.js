const mongoose = require('mongoose');

const{Schema } = mongoose;

const userDataSchema = new Schema({
    userName : {
        type: String,
        required: true
    },
    userEmail : {
        type: String,
        required: true
    },
    userLocation : {
        type: String,
        required: true
    },
    userPhone : {
        type : Number,
        required: true
    },
    userPasscode: {
        type: String,
        required: true
    },
    createdOn : {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('userData', userDataSchema);