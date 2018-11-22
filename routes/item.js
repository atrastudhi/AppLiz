const express = require('express')
const Route = express.Router()
const TransactionController = require("../controllers/TransactionController.js")
const ItemController = require("../controllers/ItemController.js")

Route.get("/",ItemController.showAllItem)

Route.get("/buy/:id",TransactionController.buyItem)

module.exports = Route