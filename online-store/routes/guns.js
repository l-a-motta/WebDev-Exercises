var express = require('express');
var router = express.Router();

/* GET guns listing. */
router.get('/gunlist', function (req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function (e, docs) {
    res.json(docs);
  });
});

/* POST to addgun. */
router.post('/addgun', function (req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.insert(req.body, function (err, result) {
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

/* DELETE to deleteuser. */
router.delete('/deletegun/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  var userToDelete = req.params.id;
  collection.remove({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;
