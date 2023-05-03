const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const lokasiSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('Lokasi', lokasiSchema)
