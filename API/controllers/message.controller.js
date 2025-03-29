// const message_MODEL = require("../models/proudct.model")

const message_MODEL = require("../models/message.model")

const createmessage = async (req, res) => {
    const {
        messageTitle,
        message,
        image,
    } = req.body
    try {
        const data = await message_MODEL.create({
            messageTitle,
            message,
            image,
        })
        res.status(200).json({
            success: true,
            message: "message created",
            data: data,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })
    }
}

const getMessages = async () => {
    try {
        const message = await message_MODEL.find({})
        res.status(200).json({
            success: true,
            data: message,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message

        })
    }
}

const Findmessage = async (req, res) => {
    const { messageName } = req.body
    try {
        const message = await message_MODEL.find({ messageName })
        res.status(200).json({
            success: true,
            data: message,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message

        })
    }
}

const Deletmessage = async (req, res) => {
    const { messageName } = req.body
    try {
        const message = await product_MODEL.deleteOne({ messageName })
        res.status(200).json({
            success: true,
            data: message,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message

        })
    }
}


module.exports = {
    createmessage,
    Deletmessage,
    Findmessage,
    getMessages,
}