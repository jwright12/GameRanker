const express = require('express');
const router = express.Router();
const Game = require('../models/GameModel');

router.post('/', (req,res) => {
   console.log("Game Post")
})
module.exports = router;