const express = require('express')
const router = express.Router()
const Hotel = require('../models/Hotel')
const hotelController = require('../controllers/hotelController')

router.get('/', hotelController.getAllHotels)
router.post('/', hotelController.createHotel)

module.exports = router
