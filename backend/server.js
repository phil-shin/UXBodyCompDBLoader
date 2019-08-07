// import required libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const logger = require('morgan');
const axios = require('axios');

// import database mode
const data = require('./data');

// initialize port for backend
const API_PORT = 3001;

// initialize express middleware 
var app = express();
var router = express.Router();

// initialize mongoose - MongoDB connection
mongoDBUrl='';
mongoose.connect(mongoDBUrl, {useNewUrlParser: true });

// check for errors in mongoose connection
let db = mongoose.connection;
db.once('open', () => console.log('connected to database'));
db.on ('error', console.error.bind(console, 'error connecting to database'))

// initialize app level middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// [C]reate - create method
router.post('/createData', function (req, res) {
    
})

// [R]ead - get method

// [U]pdate - update method

// [D]elete- delete method

// connect router to '/api' path
app.use('/api', router);

// connect server to port
app.listen(API_PORT, ()=> console.log('listening on PORT:'+API_PORT));

