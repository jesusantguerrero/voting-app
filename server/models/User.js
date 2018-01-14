const mongoose = require('mongoose');


const User = mongoose.model('User', new mongoose.Schema({
  id: String,
  provider: String,
  displayName: String,
  name: mongoose.Schema.Types.Mixed,
  emails: mongoose.Types.Array,
  photos: mongoose.Types.Array
}));

module.exports  = User;

