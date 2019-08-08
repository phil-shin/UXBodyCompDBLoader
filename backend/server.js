// import required libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const logger = require('morgan');
const axios = require('axios');

// import database mode
var Comp = require('./data');

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
    const { feet, inches, 
    leanWeight, leanAthlete, leanAthletePos, leanAthleteImgPath,
    athWeight, athAthlete, athAthletePos, athAthleteImgPath, 
    bulkWeight, bulkAthlete, bulkAthletePos, bulkAthleteImgPath } = req.body;

    let comp = new Comp();

    // fill in document data fields from request data sent from Front End
    comp.height = parseInt(feet+'.'+inches);
    comp.type.lean.weight = leanWeight;
    comp.type.lean.athlete.name= leanAthlete;
    comp.type.lean.athlete.position= leanAthletePos;
    comp.type.lean.athlete.imagePath= leanAthleteImgPath;
    comp.type.athletic.weight = athWeight;
    comp.type.athletic.athlete.name= athAthlete;
    comp.type.athletic.athlete.position= athAthletePos;
    comp.type.athletic.athlete.imagePath= athAthleteImgPath;
    comp.type.bulky.weight = bulkWeight;
    comp.type.bulky.athlete.name= bulkAthlete;
    comp.type.bulky.athlete.position= bulkAthletePos;
    comp.type.bulky.athlete.imagePath= bulkAthleteImgPath;

    comp.save( (err, data) => {
        if (err) {
            return console.error(err);
        }
    });
});

// [R]ead - get method
router.get('/getData', function (req, res) {
    Comp.find({}, function (err, data) {
        if (err) {
            return res.json({success: false, error: err })
        } 
        return res.json({ success: true, data:data });
    })
})

// [U]pdate - update method
router.post('/updateData', function (req, res) {
    let { feet, inches, field, update } = req.body;
    let height = parseInt(feet+'.'+inches);
    Comp.findOneAndUpdate( {height: height}, {[field]: update}, function (err, data) {
        if (err) {
            return res.json({success: false, error: err});
        }
        return res.json({success:true})
    })
})

// [D]elete- delete method
router.delete('/deleteData', function (req, res) {
    let { feet, inches } = req.body;
    let height = parseInt(feet+'.'+inches);
    Comp.findOneAndDelete( {height: height}, function (err, data) {
        if (err) {
            return res.json({success: false, error: err});
        }
        return res.json ({ success: true });
    });
})


// connect router to '/api' path
app.use('/api', router);

// connect server to port
app.listen(API_PORT, ()=> console.log('listening on PORT:'+API_PORT));

