var express = require('express');
var router = express.Router();
var dbtasks = require('../model/dbtasks');

router.get('/getAll', function (req, res, next) {
  dbtasks.getAll(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/:id?', function (req, res, next) {
  dbtasks.getById(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post('/', function (req, res, next) {
  dbtasks.add(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 &amp;amp;amp; 0
    }
  });
});

router.delete('/:id', function (req, res, next) {
  dbtasks.delete(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }

  });
});

router.put('/:id', function (req, res, next) {
  dbtasks.update(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;