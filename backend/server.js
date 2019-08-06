const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require(./data');

// set port to listen on
const API_PORT = 3001;

const app = express();
app.use(cors());
const router = express.Router();

//  MongoDB path
const dbPath = '';

// connect to MongoDB database
mongoose.connect(dbPath, {useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// check for connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// set up bodyParser and morgan logger middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// get method
router.get('/getData', function (req, res) {
    
})

// update method

//create method

// delete method

// connect router to /api path
app.use('/api', router);

// launch backend into port
app.listen(API_PORT, () => console.log('Backend is listening on PORT'+API_PORT));