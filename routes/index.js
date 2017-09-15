var express = require('express');
var router = express.Router();
// i dont need new route
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//hello world
module.exports = router;
