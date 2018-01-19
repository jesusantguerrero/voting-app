const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const session = require('express-session');
require('dotenv').config();
const User = require('./server/models/User');
const db = require('./server/models/db');
const passport = require('./server/passportProviders');

// routes objects
const Poll = require('./server/api/poll');
const Vote = require('./server/api/vote');
const Options = require('./server/api/option');

//  settings
app.use(express.static("build"));
app.use(require('cookie-parser')());
app.use(session({ secret: 'voting-app', resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//  main routes
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
})

app.get('/p*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
})

//  authentication related
app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter',
  { 
    successRedirect: '/',
    failureRedirect: '/'
  }
))

app.get('/auth/logout',(req, res) => {
  req.logout();
  res.redirect('/');
})

app.get('/current', (req, res) => {
  res.json({ user: req.user });
})

//  routing to the route objects
app.use('/api/poll', Poll);
app.use('/api/vote', Vote);
app.use('/api/option', Options);


const listen = app.listen(process.env.PORT || 80 , () => {
  console.log(`listening port ${listen.address().port}`);
})