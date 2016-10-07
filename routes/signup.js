var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

/* GET home page. */
router.get('/', auth.isLoggedIn, function(req, res, next) {
  res.render('./auth/signup');
});

router.post('/', function(req, res, next){
  db.findUserByUsername(req.body.username).then(function(camper){
    if(camper){
      res.render('./auth/signup', {error: "Please try again"});
    } else {
      auth.createUser(req.body).then(function(id){
        req.session.camperId = id;
        res.redirect('/home');
      });
    }
  }).catch(function(err){
    next(err);
  });
});

module.exports = router;
