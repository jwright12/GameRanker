/*
    This class acts as the main Controller for displaying Game data from the Model in a consumable format for the View.
    It acts as one of the primary components to define the Business Logic of GameRanker.
    The FilterView will make requests to this Controller to get the possible filterable dimensions in our Application Domain, 
    as represented by the Data Model.

    This Controller could be extended to dispatch changes to the Model to concerned Views. If Sockets were implemented, this class
    could dispatch data updates to Views so that GameRankings could be updated concurrently in real-time across many clients browsers.
    
    This Controller could also be extended to handle complex Game Filter dimension permutations. For example, complex Business Logic could be applied here to 
    determine which Games and Game statistics are returned to the Client based on the combinations of Filters requested by the Client.
*/

const express = require('express');
const router = express.Router();
const Game = require('../models/GameModel');

router.get('/', (req,res) => {
    // Game.find()
    // .sort({votes: -1})
    // .then(games => res.json(games))
    res.status(200).json([{platform: 'Xbox' }, {platform: 'PlayStation'}])
})

router.get('/:dimension', (req,res) => {
    res.send("OK")
})

module.exports = router;