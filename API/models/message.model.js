const { Schema, model } = require("mongoose");

const messageSchema = new Schema({

    messageTitle: {
        type: String,
        required: true,
        minLength: 1,
        spilt: " ",
    },
    message: {
        type: String,
        required: true,
        minLength: 1,
        spilt: " ",
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const message_MODEL = model("message", messageSchema);
module.exports = message_MODEL

