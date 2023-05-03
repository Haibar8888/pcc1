const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: 'indonesia',
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    default: 'night',
  },
  categoryId: [
    {
      type: ObjectId,
      ref: 'category',
    },
  ],
  imageId: [
    {
      type: ObjectId,
      ref: 'image',
    },
  ],
  featuredId: [
    {
      type: ObjectId,
      ref: 'featured',
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: 'activity',
    },
  ],
})

module.exports = mongoose.model('item', itemSchema)
