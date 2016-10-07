var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');

router.get('/', auth.isNotLoggedIn, function(req, res, next){
    knex('camper').select('site.name', 'site.image', 'site.longitude', 'site.latitude', 'site.description', 'camper_site.camper_id')
    .join('camper_site', 'camper.id', 'camper_site.camper_id')
    .join('site', 'site.id', 'camper_site.site_id')
    .where('camper_site.camper_id', req.session.camperId)
    .then(function(data){
      console.log(data);

      res.render('favorite', {site: data});
    });
});

router.get('/:id', function(req, res, next) {
console.log(req.session.camperId);
console.log(req.params.id);
  knex('camper_site').select()
  .where({camper_id: req.session.camperId, site_id: req.params.id}).first()
  .then(function(data){
    if(data) {
      return "Site has already been added";
    }else {
      return knex('camper_site').insert({
        camper_id: req.session.camperId,
        site_id: req.params.id
      });
    }
  }).then(function(data) {
          res.redirect('/campsite/' + req.params.id);
      }).catch(function(error) {
          next(error);
      });
    });

module.exports = router;
