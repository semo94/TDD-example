var User = require('../models/userModel');
var UserController = require('../controllers/UserController')(User);

module.exports = function(router){

    // Get all Users
    router.get('/user/all', UserController.GetUsers);

    // Create a new User
    router.post('/user/add', UserController.PostUser);

    // Delete a user based on :id
    router.delete('/user/remove/:id', UserController.DeleteUser);

    // Update a username based on :id
    router.put('/user/changename/:id', UserController.UpdateUserName);

    // Activate user's account based on :id
    router.put('/user/activate/:id', UserController.ActivateAccount);
}
