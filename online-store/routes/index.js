var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET gunlist page. */
router.get('/gunlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
      res.render('gunlist', {
          "gunlist" : docs
      });
  });
});

/* GET New gun page. */
router.get('/newgun', function(req, res) {
  res.render('newgun', { title: 'Add New gun' });
});

module.exports = router;
