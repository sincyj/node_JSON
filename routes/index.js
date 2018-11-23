var express = require('express');
var router = express.Router();
var Heroes = require('../models/heros.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/saveData', function(req, res, next) {
	Heroes.saveNew(req.query);
    res.render('heros', {data : req.query})
});

router.get('/getAllHeroes', function(req, res, next) {
  res.render('heros', {data : Heroes.getAll()})
});


module.exports = router;
  