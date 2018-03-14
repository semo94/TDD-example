var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema for the user data
var UserSchema = Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  activated: {
    type: Boolean,
    default: false
  },
  created_by: {
    type: Date,
    default: Date.now
  }
});
//Exporting our model
var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
