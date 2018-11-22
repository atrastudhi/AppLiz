const express = require('express')
const helper = require('../helper/helper')
const Route = express.Router()
const TransactionController = require("../controllers/TransactionController.js")
const ItemController = require("../controllers/ItemController.js")

Route.get("/", helper.adminPage, ItemController.showSearchBar)
Route.post("/",ItemController.searchItem)

Route.get("/buy/:id",TransactionController.buyItem)
Route.get("/successbuy",TransactionController.success)
Route.get("/show-transaction",TransactionController.showTransaction)
Route.get("/show-all",ItemController.showAllItem)
Route.get("/edit/:itemId",ItemController.editItem)
Route.get("/delete/:itemId",ItemController.deleteItem)

module.exports = Route