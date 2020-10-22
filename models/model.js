const { Schema, model } = require("mongoose")

//song schema
const songSchema = new Schema(
    {
        title: String,
        artist: String,
        time: { type: String, required: true }
    }
)

//song model
const Song = model("Song", songSchema)

//export model
module.exports = Song;