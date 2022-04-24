/*
    This file acts as the main Controller for Game Publishers to add new Game to the domain.
    It is responsible for receiving requests from the AddGameView, processing the data, and inserting that data into the domain using the Game Model.

    This Controller could be extended to dispatch new changes to the Data Model to concerned views of Users in other browsers. At the moment, 
    our application views ask for data when they are initially rendered or when the state changes in them to respond to User input.
    Changes made by other Users could be dispatched concurrently using an Observer style pattern in tandem with networking sockets. 
*/

const express = require('express');
const { updateOne } = require('../models/GameModel');
const router = express.Router();
const Game = require('../models/GameModel');

router.post('/', async function (req,res) {
   console.log("Game Post")
   const games = [
      {
         title:"Zelda BoTW",
         platform:"Nintendo Switch",
         publisher:"Nintendo",
         genre:"ARPG",
         votes: 0
      },
      {
         title:"Hades",
         platform:"Nintendo Switch",
         publisher:"Nintendo",
         genre:"ARPG",
         votes: 0
      },
      {
         title:"Celeste",
         platform:"Nintendo Switch",
         publisher:"Nintendo",
         genre:"Indie",
         votes: 0
      },
      {
         title:"Stardew Valley",
         platform:"Nintendo Switch",
         publisher:"Nintendo",
         genre:"Indie",
         votes: 0
      },
      {
         title:"Super Metroid",
         platform:"Super Nintendo",
         publisher:"Nintendo",
         genre:"Action Adventure",
         votes: 0
      },
      {
         title:"Golden Eye 007",
         platform:"Nintendo 64",
         publisher:"Nintendo",
         genre:"FPS",
         votes: 0
      }
   ];
   
   const result = await Game.insertMany(games).catch(err => res.status(404).send(err));
   res.status(201)
});

module.exports = router;