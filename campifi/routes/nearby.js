var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');
var map = require('../map');

router.get('/', function(req, res , next) {
  res.render('nearby');
  map.apiData().then(function(body){
    res.render('nearby', {body: body})
    console.log(body)
  })
});

module.exports = router;
