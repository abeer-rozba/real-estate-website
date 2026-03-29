const mongoose = require("mongoose")

const connection = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {console}
}
