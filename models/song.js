const { Schema, model } = require("mongoose")

//song schema
const songSchema = new Schema(
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        time: { type: String, required: true }
    }
)

//song model
const Song = model("Song", songSchema)

//export model
module.exports = Song;