const Hotel = require('../models/Hotel')

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({})
    return res.send(hotels)
  } catch (error) {
    console.error('Error occurred while getting all hotels: ', error.message)
  }
}

const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body)
    return res.send(hotel)
  } catch (error) {
    console.error('Error occurred while creating a hotel: ', error.message)
  }
}

const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id)
    return res.send(hotel)
  } catch (error) {
    console.error('Error occurred while getting the hotel: ', error.message)
  }
}

const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after'
    })
    return res.send(hotel)
  } catch (error) {
    console.error('Error occurred while updating the hotel: ', error.message)
  }
}

module.exports = {
  getAllHotels,
  createHotel,
  getHotelById,
  updateHotel
}
