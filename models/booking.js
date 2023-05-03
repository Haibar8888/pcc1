const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const bookingSchema = mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  invoice: {
    type: String,
    require: true,
  },

  itemId: {
    _id: {
      type: ObjectId,
      ref: 'Item',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  total: {
    type: Number,
    require: true,
  },

  memberId: {
    type: ObjectId,
    ref: 'member',
  },

  bankId: {
    type: ObjectId,
    ref: 'bank',
  },
  payments: {
    proofPayment: {
      type: String,
      required: true,
    },
    bankFrom: {
      type: String,
      require: true,
    },
    accountHolder: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
})

module.exports = mongoose.model('booking', bookingSchema)
