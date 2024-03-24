// routes/index.js
var express = require('express');
var router = express.Router();

// Route for Home Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Animals' });
});

// Route for Deer
router.get('/deer', function(req, res, next) {
  res.render('deer');
});

// Route for Dog
router.get('/dog', function(req, res, next) {
  res.render('dog');
});

// Route for Elephant
router.get('/elephant', function(req, res, next) {
  res.render('elephant');
});

// Route for Lion
router.get('/lion', function(req, res, next) {
  res.render('lion');
});

module.exports = router;
