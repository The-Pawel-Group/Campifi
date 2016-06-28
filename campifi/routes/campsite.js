var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');
router.get('/', function(req, res, next) {
  res.render('campsite');
});

router.get('/:id', function(req, res, next) {
  return Promise.all([
  knex('site').select().where('site.id', req.params.id).first()
])
  .then(function(data) {
    console.log(data);
    res.render('campsite', {site: data});
  });
});

router.get('/delete/:id', function(req, res, next) {
  console.log(req.params.id)
 knex('site').where({id: req.params.id}).del().then(function(data){
   res.redirect('/home');
 }).catch(function(error) {
     next(error);
 });
});

module.exports = router;
