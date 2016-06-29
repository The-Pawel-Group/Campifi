var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

router.get('/', auth.isNotLoggedIn, function(req, res , next) {
  res.render('nearby');
});

module.exports = router;
