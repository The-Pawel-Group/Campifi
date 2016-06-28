var db = require('./db/api');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(function(username, password, done){
  db.findUserByUsername(username).then(function(camper, err) {
    if(!camper) {
      done('Something went wrong, try again?!? Or no camping for you.');
    } else if (camper && bcrypt.compareSync(password, camper.password)) {
      done(null, camper);
    } else {
      done('That\'s not right! Get this done and lets go camping.');
    }
  });
}));

module.exports = {
  passport: passport,
  createUser: function(body) {
    var hash = bcrypt.hashSync(body.password, 8);
    body.password = hash;
    return db.addCamper(body).then(function(id) {
      return id[0];
    });
  },
  isLoggedIn: function(req, res, next) {
    if(req.session.camperId) {
      res.redirect('/home');
    } else {
      next();
    }
  }
};
