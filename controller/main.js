'use strict';

var response = require('../response');

exports.index = function(req, res) {
    response.ok("API is starting up...", res)
};
exports.apierror = function(req, res) {
    response.errors("API is getting error...", res)
};