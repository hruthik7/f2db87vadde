var express = require('express');
const rabbit_controlers= require('../controllers/rabbit');
var router = express.Router();
/* GET rabbit page. */
router.get('/', rabbit_controlers.rabbit_view_all_Page);

/* GET detail rabbit page */
router.get('/detail', rabbit_controlers.rabbit_view_one_Page);

/* GET create costume page */
router.get('/create', rabbit_controlers.rabbit_create_Page);


/* GET create update page */ 
router.get('/update', rabbit_controlers.rabbit_update_Page);

/* GET delete costume page */ 
router.get('/delete', rabbit_controlers.rabbit_delete_Page); 


module.exports = router;
