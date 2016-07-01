var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');
require('dotenv').config();

router.get('/', auth.isNotLoggedIn, function(req, res, next) {
  return Promise.all([
  knex('site').select(),
  knex('camper').select().where('id', req.session.camperId).first()
])
  .then(function(data) {
    res.render('home', {site: data[0], camper: data[1], key:process.env.GEOLOCATION_KEY});
  });
});


// router.get('', function(req, res, next){
//   return Promise.all([
//     knex('site').select(),
//   ]).then( function(data){
//     res.json(data)
//     console.log(data)
//   })
// })

module.exports = router;
