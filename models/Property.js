const mongoose = require('mongoose')

const facilitySchema = new mongoose.Schema({
  bedrooms: {
    type: Number,
    required:
  }
})

const propertySchema = new mongoose.Schema({
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
  },
  facilities: {
    type: facilitySchema,
    required: true
  }, { timestamps: true }
})
