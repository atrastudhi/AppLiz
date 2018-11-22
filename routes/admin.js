const express = require('express')
const ItemController = require('../controllers/ItemController')
const Route = express.Router()

Route.get('/', ItemController.showItemAdmin)

module.exports = Route