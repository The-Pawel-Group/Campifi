var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.camperId) {
    res.redirect('/home');
  } else {
    next();
  }
}, function(req,res,next) {
  res.render('/auth/login');
});

router.post('/', function(req, res, next) {
  auth.passport.authenticate('local', function(err, camper, info) {
    if (err) {
      res.render('/auth/login', {error: err});
  } else if (camper) {
      req.session.camperId = camper.id;
      res.redirect('/home');
    }
  })(req, res, next);
});

module.exports = router;
