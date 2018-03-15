var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

//import User Model for the unit testing.
var User = require('../app/models/userModel');
