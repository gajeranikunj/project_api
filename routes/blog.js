var express = require('express');
var router = express.Router();
const ur = require("../controller/blog")
/* GET home page. */
router.post('/createblog', ur.create)
router.get('/getbyid/:id', ur.getbyid)
router.get('/getall', ur.getall)
router.delete('/Delete/:id', ur.Delete)
router.patch('/Update/:id', ur.Update)





module.exports = router;
