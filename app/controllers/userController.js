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
    User.remove({_id : req.params.id }, function(err, user){
      if(err) {
        res.json({status: false, error: "faild to delete account"});
      }
      res.json({status: true, message: "account deleted"});
    });
  }

  userCTRL.UpdateUserName = function(req, res, next) {
    User.findById(req.params.id, function(err, user){
      user.username = req.body.username;
      user.save(function(err, user){
        if(err) {
          res.json({status: false, error: "Username didn't updated"});
        }
        res.json({status: true, user: user});
      });
    });
  }

  userCTRL.ActivateAccount = function(req, res, next) {
    User.findById(req.params.id, function(err, user){
      user.activated = true;
      user.save(function(err, user){
        if(err) {
          res.json({status: false, error: "Username wasn't updated"});
        }
        res.json({status: true, user: user});
      });
    });
  }

  return userCTRL;
}

module.exports = UserController;
