var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./auth/login');
});

router.post('/', function(req, res, next) {
  console.log(req.body.username);
  db.findUserByUsername(req.body.username).then(function(camper) {
    console.log(camper);
    if(camper) {
      res.redirect('/home');
    }
    else {
      res.render('auth/login', {error: 'no username found'});
    }
  });
});

module.exports = router;
