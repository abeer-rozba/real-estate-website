const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    averagePricePerNight: {
      type: Number,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        required: false
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Hotel', hotelSchema)
