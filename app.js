var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// API server
var api = express();
api.use('/', indexRouter);
api.use('/users', usersRouter);

// app server with static files
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

// NOTA index router viene coperto dalla riga sopra

module.exports = app;
