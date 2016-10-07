var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var auth = require('./auth');
var request = require('request');


//All the routes
var routes = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/signup');
var login = require('./routes/login');
var home = require('./routes/home');
var site_add = require('./routes/site_add');
var campsite = require('./routes/campsite');
var logout = require('./routes/logout');
var favorite = require('./routes/favorite');
var marker_json = require('./routes/marker_json');


require('dotenv').config();

var app = express();

app.use(auth.passport.initialize());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2]}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/signup', signup);
app.use('/login', login);
app.use('/home', home);
app.use('/site_add', site_add);
app.use('/campsite', campsite);
app.use('/logout', logout);
app.use('/favorite', favorite);
app.use('/marker_json', marker_json);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
