var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');
var config = require('./app/config/config');
var app = express();
var router = express.Router()


app.use(morgan('dev'));                                         // log every request to the console
app.use(cors());                                                // avoid cross origin problem
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use('/', router);

require('./app/router/router')(router); // main endpoints routing connection

//Connecting MongoDB using mongoose to our application
mongoose.connect(config.db);

//This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});

//Express application will listen to port mentioned in our configuration
var server = app.listen(config.port, function(err){
  if(err) throw err;
  console.log("App listening on port " + config.port);
});

module.exports = server;
