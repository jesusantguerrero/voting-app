const mongoose = require('mongoose');

class User {
  constructor() {
    this.model = mongoose.model('User', new mongoose.Schema({
      id: String,
      provider: String,
      displayName: String,
      name: mongoose.Schema.Types.Mixed,
      emails: mongoose.Types.Array(String),
      photos: mongoose.Types.Array(String)
    }));
  }

  create(user) {
    return this.model.create(user).then((user) => user);
  }

  findOrCreate(user) {
    const foundUser = this.model.findById(user.id);
    if (foundUser) {
      return foundUser
    }
    return this.create(user);
  }
}


module.exports  = new User();

