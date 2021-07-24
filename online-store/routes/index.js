var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function (req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET gunlist page. */
router.get('/gunlist', function (req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function (e, docs) {
    res.render('gunlist', {
      "gunlist": docs
    });
  });
});

/* GET new gun page. */
router.get('/addgun', function (req, res) {
  res.render('addgun', { title: 'Add New gun' });
});

/* POST to add new gun */
router.post('/addgun', function (req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var gunName = req.body.name;
  var gunNumber = req.body.number;
  var gunType = req.body.type;
  var gunPrice = req.body.price;
  var gunDescription = req.body.description;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "name": gunName,
    "number": gunNumber,
    "type": gunType,
    "price": gunPrice,
    "description": gunDescription
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("gunlist");
    }
  });

});

module.exports = router;
