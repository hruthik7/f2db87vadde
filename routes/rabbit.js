var express = require('express');
const rabbit_controlers= require('../controllers/rabbit');
var router = express.Router();
/* GET rabbit page. */
router.get('/', rabbit_controlers.rabbit_view_all_Page);

/* GET detail rabbit page */
router.get('/detail', rabbit_controlers.rabbit_view_one_Page);

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
  /* GET update costume page */ 
router.get('/update', secured, rabbit_controlers.rabbit_update_Page); 


/* GET create costume page */
router.get('/create', secured, rabbit_controlers.rabbit_create_Page);


/* GET delete costume page */ 
router.get('/delete',secured, rabbit_controlers.rabbit_delete_Page); 


module.exports = router;
