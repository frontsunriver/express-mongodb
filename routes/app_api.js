const controller = require('../controllers/AppController');
module.exports = (app) => {
    app.get('/app_api/usersignin', controller.signin);
      
}

