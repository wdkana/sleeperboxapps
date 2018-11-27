'use strict'

exports.ok = function(values, res) {
    let data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
};

exports.errors = function(values, res) {
    let data = {
        'status': 500,
        'values': values
    };
    res.json(data);
    res.end();
};