var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let booksRouter = require('./routes/books');
let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),{index:false}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books',booksRouter);

let htmlHead = '  <link rel="stylesheet" href="/stylesheets/style.css">'

app.get("/",function(req,res){
  });
module.exports = app;
