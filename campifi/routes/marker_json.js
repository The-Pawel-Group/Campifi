var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

router.get('/', function(req, res, next){
  return Promise.all([
  knex('site').select()
  ]).then( function(data){
    data = data[0];
    res.json(data)
  })
})

module.exports = router
