const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bookmarks: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: false }
    ],
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
module.exports = mongoose.model('Customer', customerSchema)
