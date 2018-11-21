const express = require('express')
const Route = express.Router()
const TransactionController = require("../controllers/TransactionController.js")

Route.get("/buy/:id",TransactionController)

module.exports = Route