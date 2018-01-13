const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const db = require('./models/db');
const User = require('./models/User'); 

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/twitter/callback"
  },

  (token, tokenSecret, profile, done) => {
    User.findOrCreate( ..., (err, user) => {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
