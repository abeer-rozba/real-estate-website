const mongoose = require("mongoose")

const agentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    phoneNum: { type: Number, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
  },
  { timestamps: true }
)
