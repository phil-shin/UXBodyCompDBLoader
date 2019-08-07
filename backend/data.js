var mongoose = require('mongoose');
const Schema = mongooose.Schema();

var compSchema = new Schema({
    height: Number,
    type: {
        lean: {
            weight: Number,
            athlete: {
                name: String,
                position: Number,
                imagePath: String,
            }
        },
        athletic: {
            weight: Number,
            athlete: {
                name: String,
                position: Number,
                imagePath: String
            }
        },
        bulky: {
            weight: Number,
            athlete: {
                name: String,
                position: Number,
                imagePath: String
            }
        }
    }
})
