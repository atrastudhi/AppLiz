const express = require('express')
const helper = require('../helper/helper')
const Route = express.Router()
const TransactionController = require("../controllers/TransactionController.js")
const ItemController = require("../controllers/ItemController.js")

Route.get("/", helper.adminPage, ItemController.showSearchBar)
Route.post("/",ItemController.searchItem)

Route.get("/buy/:id",TransactionController.buyItem)

module.exports = Route