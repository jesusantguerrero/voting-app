const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const db = require('./models/db');
const User = require('./models/User'); 

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost/auth/twitter/callback/"
  },

  (token, tokenSecret, profile, done) => {
    User.findOrCreate(profile)
      .then((res) => {
        // 
      })
      .catch((err) => {
        console.log(err);
      });
    return done(null, profile);
  }
))

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


module.exports = passport;
