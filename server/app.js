const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');
var cors = require('cors')
var routes = require('./routes');
const connection = require('./config/database');
const port=3000||process.env.port
const MongoStore = require('connect-mongo')(session);

require('dotenv').config();
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' });

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day.
    }
}));

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
});


app.use(routes);
app.listen(port);