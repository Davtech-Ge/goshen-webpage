const mongoose = require('mongoose')

const audioSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    audioBody : {
        type : [],
        required: true,
    },

}, {
    timestamps : true
})

const AudioModel = mongoose.model("Audio", audioSchema)

module.exports = AudioModel