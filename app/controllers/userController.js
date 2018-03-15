var UserController = function(User){

  var userCTRL = {};

  userCTRL.GetUsers = function(req, res, next) {
    res.status(204).send();
  }

  userCTRL.PostUser = function(req, res, next) {
    res.status(204).send();
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
