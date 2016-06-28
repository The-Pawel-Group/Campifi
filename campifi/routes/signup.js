var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./auth/signup');
});

router.post('/', function(req, res, next){
  db.findUserByUsername(req.body.username).then(function(camper){
    if(camper){
      console.log(camper);
      res.render('/', {error: "Please try again"});
    } else {
      db.addCamper(req.body).then(function(){
        res.redirect('/');
      });
    }
  }).catch(function(err){
    next(err);
  });
});
module.exports = router;
