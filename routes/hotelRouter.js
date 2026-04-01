const express = require('express')
const router = express.Router()
const Hotel = require('../models/Hotel')
const hotelController = require('../controllers/hotelController')

router.get('/', hotelController.getAllHotels)

router.get('/new', (req, res) => {
  res.render('./hotels/new.ejs')
})
router.post('/new', hotelController.createHotel)

router.get('/:id', hotelController.getHotelById)

router.get('/:id/edit', async (req, res) => {
  const hotel = await Hotel.findById(req.params.id)
  res.render('./hotels/edit.ejs', { hotel })
})
router.put('/:id/edit', hotelController.updateHotel)

router.delete('/:id', hotelController.deleteHotel)

module.exports = router
