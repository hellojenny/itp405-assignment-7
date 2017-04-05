var express = require('express');
var mysql = require('mysql');
var app = express();
var getReviews = require('./src/review');
var getBook = require('./src/book');

app.get('/api/v1/reviews', function (request, response) {
  getReviews().then(function(reviews) {
    response.json(reviews);
  }, function(error) {
    response.json(error);
  });
});

app.get('/api/v1/books/:id', function (request, response) {
  getBook(request.params.id).then(function(book) {
    response.json(book);
  }, function(error) {
    response.json(error);
  });
});

app.listen(8000);