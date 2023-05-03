const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const activitySchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  itemId: {
    type: ObjectId,
    ref: 'item',
  },
  isPopular: {
    type: Boolean,
  },
})

module.exports = mongoose.model('activity', activitySchema)
