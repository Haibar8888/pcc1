const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: [true, 'Image url harus diisi'],
    },
})

module.exports = mongoose.model('image', imageSchema)
