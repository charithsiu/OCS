const users = require('../../app/controllers/users.server.controller');
const articles = require('../../app/controllers/courses.server.controller');

module.exports = function(app) {
    app.route('/api/courses').get(articles.list);
        //.post(users.requiresLogin, articles.create);

    app.route('/api/courses/:courseno')
        .get(articles.read)
        .put(users.requiresLogin, articles.update)
        .delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

    app.param('courseno', articles.articleByID);
};