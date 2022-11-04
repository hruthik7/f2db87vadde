var express = require('express');
var router = express.Router();

class rabbit{
  constructor(rabbit_Name,rabbit_Price,rabbit_gender){
    this.rabbit_Name = rabbit_Name;
    this.rabbit_Price = rabbit_Price;
    this.rabbit_gender = rabbit_gender;

}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  let rabbitone = new rabbit('mike', 7000, 'male');
  let rabbittwo = new rabbit('elena', 16000, 'female');
  let rabbitthree = new rabbit('stefan', 34000, 'male');

  res.render('rabbit', { title: 'Search Results rabbit',rabbit : [rabbitone,rabbittwo,rabbitthree] });
});

module.exports = router;
