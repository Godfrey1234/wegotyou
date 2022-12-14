const express = require('express');
const router = express.Router()

//declare controller path
const login = require('../controller/login');
const register = require('../controller/register');
const query = require('../controller/query');

//Declaring api endpoints
router.post('/login',login.login)
router.post('/register',register.register)
router.post('/query',query.query)


module.exports = router