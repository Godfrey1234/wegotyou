const express = require('express');
const router = express.Router()

//declare controller path
const login = require('../controller/login');
const register = require('../controller/register');


//Declaring api endpoints
router.post('/login',login.login)
router.post('/register',register.register)


module.exports = router