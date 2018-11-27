'use strict';

var response = require('../response');
var connection = require('../dbcon');

exports.getStories = function(req, res) {
    let userList = 'SELECT * FROM user_stories';
    connection.query(userList, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getStoryDetail = function(req, res) {
    var id = req.params.id;
    let storyDetail = 'SELECT * FROM user_stories WHERE user_id = ?';
    connection.query(storyDetail, [id], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};