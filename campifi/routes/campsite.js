var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth');
// router.get('/', function(req, res, next) {
//   res.render('campsite');
// });
// render sites
router.get('/:id', function(req, res, next) {
    return Promise.all([
        knex('site').select().where('site.id', req.params.id).first()
    ]).then(function(data) {
        console.log(data);
        res.render('campsite', {
            site: data
        });
    });
});
// Delete site //
router.get('/delete/:id', function(req, res, next) {
    knex('site').where({
        id: req.params.id
    }).del().then(function(data) {
        res.redirect('/home');
    }).catch(function(error) {
        next(error);
    });
});
// Edit site //
router.get('/edit/:id', function(req, res, next) {
    knex('site').select().where('site.id', req.params.id).first().then(function(data) {
        res.render('site_edit', {
            site: data
        });
    }).catch(function(error) {
        next(error);
    });
});

router.post('/edit/:id', function(req, res, next) {
    knex('site').where({
        id: req.params.id
    }).update(req.body).then(function() {
        res.redirect('/campsite/' + req.params.id);

    }).catch(function(error) {
        next(error);
    });
});

module.exports = router;
