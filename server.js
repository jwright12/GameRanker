/*
    This is an HTTP server we will use to send GET requests to from the browser.
    If you have used Apache, XAMPP, or Tomcat in your other courses. This is accomplishing the same task.
    It receives the GET request and does something with it.
    It also connects to our MongoDB server which you will need to install and run on localhost.

    MERN - Mongo , (Express), React, Node
*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// URI to Mongo Server ~ Use localhost
const db = 'mongodb://127.0.0.1:27017/gameranker'

// Mongoose is a package to connect to the MongoDB server
// Akin to a mysqli with PHP or JDBC with Java
//mongoose.set('useCreateIndex',true);
mongoose
    .connect(db, {useNewUrlParser: true,
                useUnifiedTopology: true   })
    .then(()=>console.log('MongoDB Connected...'))
    .catch(err=>console.log(err));

// Middleware - 
app.use(express.json())

// This tells the server when and how to serve the React app. 
// In PHP terms, this is how the 'index.html' page is served.
app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.send("test")
});

//app.use('/api/games',require('./routes/api/games'))
app.listen(8080, () => console.log("Server started on port 8080."))