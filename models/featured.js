const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const featuredSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  itemId: [
    {
      type: ObjectId,
      ref: 'item',
    },
  ],
})

module.exports = mongoose.model('featured', featuredSchema)
