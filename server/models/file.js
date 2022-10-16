const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    artist: { type: String, required: true },
    file: { type: String, required: true },
    img: { type: String, required: true }
});

module.exports = mongoose.model("file", fileSchema)