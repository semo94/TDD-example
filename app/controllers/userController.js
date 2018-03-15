var UserController = function(User){

  var userCTRL = {};

  userCTRL.PostUser = function(req, res, next) {
    var newUser = new User(req.body);
    newUser.save(function(err, user){
      if(err){
        res.json({status: false, error: err.message});
        return;
      }
      res.json({status: true, user: user});
    });
  }

  userCTRL.GetUsers = function(req, res, next) {
    User.find(function(err, users){
      if(err) {
        res.json({status: false, error: "faild to fetch users"});
        return
      }
      res.json({status: true, accounts: users});
    });
  }

  userCTRL.DeleteUser = function(req, res, next) {
    res.status(204).send();
  }

  userCTRL.UpdateUserName = function(req, res, next) {
    res.status(204).send();
  }

  userCTRL.ActivateAccount = function(req, res, next) {
    res.status(204).send();
  }

  return userCTRL;
}

module.exports = UserController;
