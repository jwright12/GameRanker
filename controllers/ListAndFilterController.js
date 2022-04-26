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

router.get('/platforms', async function (req,res) {
    console.log("FilteViewController: Fetching distinct Gaming platforms.")
    Game.distinct("platform")
    .then(platforms => res.status(200).json(platforms))
    .catch(err => res.status(404).send("Error fetching game platfomr values."));
})

router.get('/games/:platform', async function (req,res) {
    console.log(`RankedListViewController: Fetching game list by Platform: ${req.params.platform} ...`)
    if(req.params.platform === 'All') {
        Game.find()
            .sort({votes: -1})
            .then(games => res.status(200).json(games))
            .catch(err => res.status(404).send("Error fetching all games."));
    } else {
        Game.find( {platform: req.params.platform} )
            .then(games => res.status(200).json(games))
            .catch(err => res.status(404).send("Error fetching all games."));
    }
})

router.post('/vote/game/:id/:up', async function (req,res) {
    if(req.params.up === 'up') {
        console.log(`RankedListViewController: Up-voting Game ID: ${req.params.id}`)
        await Game.updateOne({'_id': req.params.id}, {'$inc': {'votes': 1}})
            
    } else if (req.params.up === 'down') {
        console.log(`RankedListViewController: Down-voting Game ID: ${req.params.id}`)
        await Game.updateOne({'_id': req.params.id}, {'$inc': {'votes': -1}})
    }
    
    

   res.status(201).send("Vote recorded.")
})

router.get('/genres', async function (req,res) {
    console.log("Fetching distinct game genres.")
    Game.distinct("genre")
    .then(games => res.status(200).json(games))
    .catch(err => res.status(404).send("Error fetching game genre values."));
})

module.exports = router;