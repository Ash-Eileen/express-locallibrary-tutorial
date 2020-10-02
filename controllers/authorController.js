var Author = require('../models/author');

// Display all authors
exports.author_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Author list');
};

// Display specific Author
exports.author_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Author detail ' + req.params.id);
};

// Display Author create page - GET path
exports.author_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle author creation POST path
exports.author_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create POST');
};

// Display author deletion GET
exports.author_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle author deletion POST
exports.author_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display author update GET
exports.author_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle auther update POST
exports.author_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update POST');
};