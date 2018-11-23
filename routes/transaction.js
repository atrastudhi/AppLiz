const express = require('express')
const TransactionController = require('../controllers/TransactionController')
const Route = express.Router()

Route.get('/', TransactionController.list)

module.exports = Route