const express = require('express')
const route = express.Router()
const {userLogin, userRegister} = require('../controller/userCtrl')

route.post('/login', userLogin)
route.post('/register', userRegister)

module.exports = route
