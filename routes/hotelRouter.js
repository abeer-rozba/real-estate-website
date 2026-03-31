const express = require('express')
const router = express.Router()
const hotelController = require('../controllers/hotelController')

router.get('/', hotelController.getAllHotels)

router.get('/new', (req, res) => {
  res.render('./hotel/new.ejs')
})
router.post('/new', hotelController.createHotel)

router.get('/:id', hotelController.getHotelById)

module.exports = router
