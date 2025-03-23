const mongoose = require('mongoose')

const subcriberSChema = new mongoose.Schema({
    fullName : {
        type : String
    },
    phoneNumber : {
        type : String,
        unique : true
    },
    email : { 
        type : String,
        unique : true,
    },
    suscription : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})

const subscriberModel = mongoose.model('subscriber', subcriberSChema);

module.exports = subscriberModel