var express = require('express');
const rabbit_controlers= require('../controllers/rabbit');
var router = express.Router();
/* GET rabbit page. */
router.get('/', rabbit_controlers.rabbit_view_all_Page);

module.exports = router;
