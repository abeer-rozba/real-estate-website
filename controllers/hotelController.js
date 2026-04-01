const Hotel = require('../models/Hotel')

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({})
    return res.render('./hotels/all.ejs', { hotels })
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
    return res.render('./hotels/show.ejs', { hotel })
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

const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id)
    return res.send('Successfully deleted the hotel.')
  } catch (error) {
    console.error('Error occurred while deleting the hotel: ', error.message)
  }
}

module.exports = {
  getAllHotels,
  createHotel,
  getHotelById,
  updateHotel,
  deleteHotel
}
