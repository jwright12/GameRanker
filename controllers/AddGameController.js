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

router.post('/game', async function (req,res) {

   
   console.log(req.body)

});

router.post('/', async function (req,res) {
   console.log("Game Post")
   const games = [
     
      {
         title:"Zelda: Breath of the Wild",
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

      },
      {
         title:"Mario Kart 8 Deluxe",
         platform:"Nintendo Switch",
         publisher:"Nintendo",
         genre:"Racing",
         votes: 0
      },
      {
         title:"Super Smash Bros.",
         platform:"Wii",
         publisher:"Nintendo",
         genre:"Fighting",
         votes: 0
      },
      {
         title:"Super Mario Odyssey",
         platform:"Nintendo Switch",
         publisher:"Nintendo",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Splatoon",
         platform:"Wii U",
         publisher:"Nintendo",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Splatoon 2",
         platform:"Nintendo Switch",
         publisher:"Nintendo",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Banjo Kazooie",
         platform:"Nintendo 64",
         publisher:"Nintendo",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Wii Sports",
         platform:"Wii",
         publisher:"Nintendo",
         genre:"Sports",
         votes: 0
      },
      {
         title:"Legend of Zelda: A Link to the Past",
         platform:"Super Nintendo",
         publisher:"Nintendo",
         genre:"Action-Adveture",
         votes: 0
      },
      {
         title:"Legend of Zelda: Ocarina of Time",
         platform:"Nintendo 64",
         publisher:"Nintendo",
         genre:"Action-Adveture",
         votes: 0
      },
      {
         title:"Pokemon: Red and Blue",
         platform:"Game Boy",
         publisher:"Nintendo",
         genre:"RPG",
         votes: 0
      },
      {
         title:"Pokemon: Black and White",
         platform:"Nintendo DS",
         publisher:"Nintendo",
         genre:"RPG",
         votes: 0
      },
      {
         title:"Pokemon: Diamond and Pearl",
         platform:"Nintendo DS",
         publisher:"Nintendo",
         genre:"RPG",
         votes: 0
      },
      {
         title:"Pokemon: Silver and Gold",
         platform:"Game Boy Advanced",
         publisher:"Nintendo",
         genre:"RPG",
         votes: 0
      },
      {
         title:"Pokemon: Ruby and Sapphire",
         platform:"Game Boy Advanced",
         publisher:"Nintendo",
         genre:"RPG",
         votes: 0
      },
   

      {
         title:"God of War",
         platform:"PS4",
         publisher:"Playstation",
         genre:"RPG",
         votes: 0
      },
      {
         title:"Horizon Zero Dawn",
         platform:"PS4",
         publisher:"Playstation" ,
         genre:"Adventure",
         votes: 0
      },
      {
         title:"Ghost of Tsushima",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Spider-man",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Bloodeborne",
         platform:"PS4",
         publisher:"Playstation",
         genre:"ARPG",
         votes: 0
      },
      {
         title:"Uncharted: Drakes Fortune",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Uncharted: Among Theives",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Uncharted: Drakes Deception",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Uncharted: A Thiefs End",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"The Last of Us",
         platform:"PS3",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"The Last of Us Part II",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"InFamous",
         platform:"PS3",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"InFamous: Second SOn",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Until Dawn",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Horror",
         votes: 0
      },
      {
         title:"Days Gone",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"The Order: 1886",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Horror",
         votes: 0
      },
      {
         title:"LittleBigPlanet",
         platform:"PS3",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Twisted Metal Black",
         platform:"PS2",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Marvel's Spider-Man",
         platform:"PS4",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Rachet and Clank",
         platform:"PS2",
         publisher:"Playstation",
         genre:"Action-Adventure",
         votes: 0
      },

 

      {
         title:"Halo Combat Evolved",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Halo 2",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Halo 3",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Halo 4",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Halo 4",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Halo Reach",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Dead Rising",
         platform:"Xbox 360",
         publisher:"Xbox",
         genre:"Horror",
         votes: 0
      },
      {
         title:"Sea of Thieves",
         platform:"Xbox one",
         publisher:"Xbox",
         genre:"Action-Adventure",
         votes: 0
      },
      {
         title:"Ori and the Blind Forest",
         platform:"Xbox one",
         publisher:"Xbox",
         genre:"Adventure",
         votes: 0
      },
      {
         title:"Gears of War",
         platform:"Xbox 360",
         publisher:"Xbox",
         genre:"Shooter",
         votes: 0
      },
      {
         title:"Fable",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"RPG",
         votes: 0
      },
      {
         title:"Fable II",
         platform:"Xbox 360",
         publisher:"Xbox",
         genre:"RPG",
         votes: 0
      },
      {
         title:"Forza Horizon 4",
         platform:"Xbox One",
         publisher:"Xbox",
         genre:"Racing",
         votes: 0
      },
      {
         title:"Ninja Gaiden",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"Fighting",
         votes: 0
      },
      {
         title:"Lost odyssey",
         platform:"Xbox 360",
         publisher:"Xbox",
         genre:"RPG",
         votes: 0
      },
      {
         title:"Call of Duty 4: Modern Warfare",
         platform:"Xbox",
         publisher:"Xbox",
         genre:"RPG",
         votes: 0
      },
      

   ];
   
   const result = await Game.insertMany(games).catch(err => res.status(404).send(err));
   res.status(201)
});

module.exports = router;