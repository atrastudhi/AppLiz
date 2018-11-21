const express = require('express')
const UserController = require('../controllers/UserController')
const Route = express.Router()

Route.get('/register', UserController.registerForm)
Route.post('/register', UserController.addUser)

Route.get('/login', UserController.loginForm)
Route.post('/login', UserController.login)

Route.get('/logout', UserController.logout)

module.exports = Route