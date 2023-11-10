const express = require('express')
const route = express.Router()
const {userLogin} = require('../controller/userCtrl')

route.post('/login', userLogin)

module.exports = route
