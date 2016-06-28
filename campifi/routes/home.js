var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

router.get('/', function(req, res, next) {
  return Promise.all([
  knex('site').select()
])
  .then(function(data) {
    console.log(data);
    res.render('home', {site: data[0]});
  });
});

module.exports = router;
