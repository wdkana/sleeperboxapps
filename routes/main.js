'use strict'

module.exports = function(app) {
    let apiChecking = require('../controller/main');
    let userData = require('../controller/users');
    let storyData = require('../controller/stories');

    //checking default format value of api
    app.route('/').get(apiChecking.index);
    app.route('/err').get(apiChecking.apierror);
    // all users api
    app.route('/users').get(userData.getUsers);
    app.route('/user/detail/:username').get(userData.getUserDetail);
    app.route('/users/register/add').post(userData.createNewUsers);
    app.route('/users/update/:username').put(userData.updateUsers);
    app.route('/users/delete/:username').delete(userData.deleteUsers);

    // all story api
    app.route('/stories').get(storyData.getStories);
    app.route('/story/detail/:id').get(storyData.getStoryDetail);


}