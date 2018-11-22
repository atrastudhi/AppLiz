const express = require('express')
const Route = express.Router()
const TransactionController = require("../controllers/TransactionController.js")
const ItemController = require("../controllers/ItemController.js")

Route.get("/",ItemController.showSearchBar)
Route.post("/",ItemController.searchItem)

Route.get("/buy/:id",TransactionController.buyItem)

module.exports = Route