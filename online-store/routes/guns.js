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

/* PUT to updategun. */
router.put('/changegun/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  var gunToUpdate = req.params.id;
  collection.findOneAndUpdate({ '_id' : gunToUpdate }, { $set: req.body }, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });
});

/* DELETE to deletegun. */
router.delete('/deletegun/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  var gunToDelete = req.params.id;
  collection.remove({ '_id' : gunToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;
