var should = require('should');
var request = require('supertest');
app = require('../index.js')
var server = request.agent(app);

//import User Model for the unit testing.
var User = require('../app/models/userModel');

describe("Unit Testing for users API", function(){

  describe('Create a user', function () {
    it('Should allow post to add a user and return its _id', function (done) {
      var params = { username: "Salim Bakri", email: "sbakri@uregina.ca" };
      server
      .post('/user/add')
      .send(params)
      .expect(200)
      .end(function(err, results){
        results.body.user.should.have.property('_id');
        results.body.user.activated.should.equal(false);
        done();
      });
    });
  });

  describe('Get all users', function () {
    before(function (done) {
      var params = { username: "Steve Jobs", email: "stevejobs@apple.com" };
      server
      .post('/user/add')
      .send(params)
      .end(function(){
        done();
      })
    });
    it('Should get success status and array of users', function (done) {
      server
      .get('/user/all')
      .expect(200)
      .end(function(err, results){
        results.body.status.should.equal(true);
        done();
      });
    });
  });

});
