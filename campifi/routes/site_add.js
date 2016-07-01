var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');
require('dotenv').config();

/* GET home page. */
router.get('/', auth.isNotLoggedIn, function(req, res, next) {
  res.render('site_add', {id: req.session.camperId, key: process.env.GEOLOCATION_KEY});
});

router.post('/', function(req, res, next) {
  var data = {
    name: req.body.name,
    image: req.body.image,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    description: req.body.description,
    camper_id: req.body.camper_id
  };
    knex('site').insert(data).then(function(message) {
      res.redirect('/home');
    }).catch(function(error) {
      next(error);
    });
  });


module.exports = router;
