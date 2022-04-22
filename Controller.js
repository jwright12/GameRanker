/*
    This is an HTTP server we will use to send GET requests to from the browser.
    If you have used Apache, XAMPP, or Tomcat in your other courses. This is accomplishing the same task.
    It receives the GET request and does something with it.
    It also connects to our MongoDB server which you will need to install and run on localhost.

    MERN - Mongo , (Express), React, Node
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Configure CORs so the server is permitted to talk with our fron-end
const corsOpts = {
    origin: 'http://localhost'
}
app.use(cors(corsOpts));

// URI to Mongo Server ~ Use localhost
const db = 'mongodb://127.0.0.1:27017/GameRanker';

// Mongoose is a package to connect to the MongoDB server
// Akin to a mysqli with PHP or JDBC with Java
//mongoose.set('useCreateIndex',true);
mongoose
    .connect(db, {useNewUrlParser: true,
                useUnifiedTopology: true   })
    .then(()=>console.log('MongoDB Connected...'))
    .catch(err=>console.log(err));

// Middleware - 
app.use(express.json());

// This tells the server when and how to serve the React app. 
// In PHP terms, this is how the 'index.html' page is served.
app.use(express.static('client/build'));

// End-points act as request Controller
app.use('/controllers/filter_games', require('./controllers/ListAndFilterController'));
app.use('/controllers/add_game', require('./controllers/AddGameController'));

app.listen(8080, () => console.log("Server started on port 8080."))