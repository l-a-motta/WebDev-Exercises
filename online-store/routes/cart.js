var express = require('express');
var router = express.Router();

/* GET carts listing. */
router.get('/cartlist', function (req, res) {
  var db = req.db;
  var collection = db.get('cart');
  collection.find({}, {}, function (e, docs) {
    res.json(docs);
  });
});

/* POST to addcart. */
router.post('/addcart', function (req, res) {
  var db = req.db;
  var collection = db.get('cart');
  collection.insert(req.body, function (err, result) {
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

/* DELETE to deletecart. */
router.delete('/deletecart/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('cart');
  var cartToDelete = req.params.id;
  collection.remove({ '_id' : cartToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;