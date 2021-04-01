const {User} = require('../models/User');
exports.signin = function(req, res){
    User.find({})
    .then(users => {
        console.log(users);
    })
    res.send({auth:1, msg:"success"});
}