const mongoose = require('mongoose')

const agentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    company: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Agent', agentSchema)
