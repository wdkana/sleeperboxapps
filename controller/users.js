'use strict';

var response = require('../response');
var db = require('../dbcon');
var obj = {};
//get all user data
exports.getUsers = function(req, res) {
    let userList = 'SELECT * FROM users';
    return db.query(userList, function (error, rows, fields){
        if(error){
            response.errors(error, res);
            console.log('uppsss... something error on the API!', error + '\nserver still running...');
        } else{
            response.ok(rows, res);
            console.log('data success...', rows + '\nServer still running...');
        }
    });
};

//get all user detail
exports.getUserDetail = function(req, res) {
    var username = req.params.username;
    let userDetail = 'SELECT * FROM user_detail WHERE username = ?';
    return db.query(userDetail, [username], function (error, rows, fields){
        if(error){
            response.errors(error, res);
            console.log('uppsss... something error on the API!', error + '\nserver still running...');
        } else{
            response.ok(rows, res);
            console.log('data success...', rows + '\nServer still running...');
        }
    });
};

//creating new users
exports.createNewUsers = function(req, res) {
    
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    let userAdd = 'INSERT INTO users (email, username, password) values (?,?,?)';
    let userAddDetail = 'INSERT INTO user_detail (username) values (?)';
    return db.query(userAdd, [ email, username, password ], function (error, rows, fields){
        if(error){
            response.errors(error, res);
            console.log('uppsss... something error on the API!', error + '\nserver still running...');
        } else{
            db.query(userAddDetail, [ username ]);
            response.ok(rows, res);
            console.log('data success...', rows + '\nServer still running...');
        }
    });
}

//updating all user data
exports.updateUsers = function(req, res) {
    
    var username = req.body.username;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var address = req.body.address;
    var phonenumber = req.body.phonenumber;

    if(firstname || lastname){
        let sql = 'UPDATE users SET firstname = ?, lastname = ? WHERE username = ?';
        return db.query(sql,[ firstname, lastname, username ], function(error, rows, fields){
            if(error){
                response.errors(error, res);
                console.log('uppsss... something error on the API!', error + '\nserver still running...');
            } else{
                response.ok(rows, res);
                console.log('data success...', rows + '\nServer still running...');
            }
        });
    }
    if(phonenumber || address){
        let sql = 'UPDATE user_detail SET address = ?, phone_number = ? WHERE username = ?';
        return db.query(sql, [ address, phonenumber, username ], function(error, rows, fields){
            if(error){
                response.errors(error, res);
                console.log('uppsss... something error on the API!', error + '\nserver still running...');
            } else{
                response.ok(rows, res);
                console.log('data success...', rows + '\nServer still running...');
            }
        });
    }
}

//deleting all users data
exports.deleteUsers = function(req, res) {
    
    var username = req.body.username;
    let sql = 'DELETE FROM users WHERE username = ?';
    let deleteUser = db.query(sql, [ username ], function(error, rows, fields){
        if(error){
            response.errors(error, res);
            console.log('uppsss... something error on the API!', error + '\nserver still running...');
        } else{
            response.ok(rows, res);
            console.log('data success...', rows + '\nServer still running...');
        }
    });
    if(deleteUser){
        let sql = 'DELETE FROM user_detail WHERE username = ?';
        return db.query(sql, [ username ]);
    }
};