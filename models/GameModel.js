const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
    This class represents our Data Model. It is the M in MVC. It represents t
*/
const GameSchema = new Schema(
    {
        title:{
            type: String,
            required: true
        },
        platform:{
            type: String,
            required: true
        },
        publisher:{
            type: String,
            required: true
        },
        genre:{
            type: String,
            required: true
        },
        release_data:{
            type: Date,
            default: Date.now
        },
        votes:{
            type: Number
        }
    }
);

// Define a primary key
GameSchema.index({title: 1, platform: 1, publisher: 1, genre: 1}, {unique: true});
module.exports = Game = mongoose.model('Game', GameSchema);