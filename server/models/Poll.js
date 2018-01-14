const mongoose = require('mongoose');


const Poll = mongoose.model('Poll', new mongoose.Schema({
  id: String,
  userId: String,
  options: Array,
  votes: mongoose.Schema.Types.Mixed,
}));

module.exports  = Poll;

