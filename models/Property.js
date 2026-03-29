const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema(
  {
    area: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
