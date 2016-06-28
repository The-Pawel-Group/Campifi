var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

router.get('/', auth.isNotLoggedIn, function(req, res, next) {
  return Promise.all([
  knex('site').select(),
  knex('camper').select()
])
  .then(function(data) {
    console.log(data);
    res.render('home', {site: data[0], camper: data[1]});
  });
});

module.exports = router;
