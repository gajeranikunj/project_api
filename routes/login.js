var express = require('express');
var router = express.Router();
const ur = require("../controller/login-sinig")
/* GET home page. */
router.post('/signup', ur.sign_up)
router.post('/login', ur.login)

module.exports = router;
