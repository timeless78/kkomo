var express = require('express');
var router = express.Router();
var thumbnails = require('./thumbnails.json');

router.get('/', function (req, res, next) {
  res.send(thumbnails);
});

router.get('/:id', function (req, res, next) {
  console.log(`express log("/:id") ->`, req.params, req.query);
  var id = parseInt(req.params.id, 10);
  var thumbnail = thumbnails.filter( function (thumb) {
    return thumb.id === id;
  });
  res.send(thumbnail);
});

module.exports = router;