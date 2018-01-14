const express = require('express');
const app = express();
const passport = require('passport');
const bodyParser = require("body-parser");
const session = require('express-session');

const Poll = require('./server/models/api/poll');

require('dotenv').config();

app.use(express.static("build"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  // res.sendFile(`${__dirname}/build/index.html`)
})

app.get('auth/twitter', passport.authenticate('twitter'));

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.

app.get('auth/twitter/callback',
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