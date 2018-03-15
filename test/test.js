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
      .expect(201)
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

  describe('Update username', function () {
    let id;
    before(function (done) {
      var params = { username: "Pill Gates", email: "b.gates@apple.com" };
      server
      .post('/user/add')
      .send(params)
      .end(function(err, results){
        id = results.body.user._id;
        done();
      })
    });
    it('Should update username based on its ID', function (done) {
      var params = { username: "Bill Gates", email: "b.gates@apple.com" }
      server
      .put('/user/changename/' + id)
      .send(params)
      .expect(200)
      .end(function(err, results){
        results.body.user.username.should.be.equal('Bill Gates');
        done();
      })
    })
  });

  describe('Activate user account', function () {
    let id;
    before(function (done) {
      var params = { username: "New User", email: "not.activated@account.com" };
      server
      .post('/user/add')
      .send(params)
      .end(function(err, results){
        id = results.body.user._id;
        done();
      })
    });
    it('Should activate user account based on ID', function (done) {
      server
      .put('/user/activate/' + id)
      .expect(200)
      .end(function(err, result){
        result.body.user.activated.should.be.true();
        done();
      })
    });
  });

  describe('Delete account', function () {
    var id;
    before(function (done) {
      var params = { username: "DELETE ME" };
      server
      .post('/user/add')
      .send(params)
      .end(function(err, result){
        id = result.body.user._id;
        done();
      })
    });
    it('Should delete the account based on usre id', function (done) {
      server
      .delete('/user/remove/' + id)
      .end(function(err, result){
        result.body.status.should.be.true();
        result.body.message.should.be.equal('account deleted');
        done();
      })
    });
  });

});
