const mongoose = require('mongoose')

const facilitySchema = new mongoose.Schema({
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  livingRooms: {
    type: Number,
    required: true
  },
  kitchens: {
    type: Number,
    required: true
  },
  garage: {
    type: Boolean,
    required: true
  },
  maidRoom: {
    type: Boolean,
    required: true
  },
  basement: {
    type: Boolean,
    required: true
  }
})

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
    },
    facilities: {
      type: facilitySchema,
      required: true
    },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Agent',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Property', propertySchema)
