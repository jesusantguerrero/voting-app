const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const session = require('express-session');
const db = require('./server/models/db');
const User = require('./server/models/User');
require('dotenv').config();
const passport = require('./server/passportProviders');

const Poll = require('./server/api/poll');
const Vote = require('./server/api/vote');


app.use(express.static("build"));
app.use(require('cookie-parser')());
app.use(session({ secret: 'voting-app', resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
})

app.get('/poll/*', (req, res) => {
  res.redirect('/');
})

//  authentication related
app.get('/auth/twitter',
 passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter',
  { 
    successRedirect: '/',
    failureRedirect: '/'
  }
));

app.get('/current', (req, res) => {
  res.json({ user: req.user });
})

//  routes
app.use('/api/poll', Poll);
app.use('/api/vote', Vote);


const listen = app.listen(process.env.PORT || 80 , () => {
  console.log(`listening port ${listen.address().port}`);
})