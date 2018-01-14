const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const session = require('express-session');

require('dotenv').config();
const passport = require('./server/passportProviders');

const Poll = require('./server/api/poll');


app.use(express.static("build"));
app.use(require('cookie-parser')());
app.use(session({ secret: 'voting-app', resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`)
})

app.get('/auth/twitter',
 passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter',
  { 
    successRedirect: '/',
    failureRedirect: '/'
  }
));

app.use('api/poll', Poll)

app.get('/prueba', (req, res) => {
  res.end('hello world');
})

const listen = app.listen(process.env.PORT || 80 , () => {
  console.log(`listening port ${listen.address().port}`);
})