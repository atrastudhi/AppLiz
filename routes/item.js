const express = require('express')
const Route = express.Router()
const TransactionController = require("../controllers/TransactionController.js")
const ItemController = require("../controllers/ItemController.js")

Route.get("/",ItemController.showSearchBar)
Route.post("/",ItemController.searchItem)

Route.get("/buy/:id",TransactionController.buyItem)
Route.get("/successbuy",TransactionController.success)
Route.get("/show-transaction",TransactionController.showTransaction)
Route.get("/show-all",ItemController.showAllItem)

module.exports = Route