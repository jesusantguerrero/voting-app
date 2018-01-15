const mongoose = require('mongoose');

class User {
  constructor() {
    this.model = mongoose.model('User', new mongoose.Schema({
      id: mongoose.Schema.Types.String,
      idProvider: String,
      provider: String,
      displayName: String,
      name: mongoose.Schema.Types.Mixed,
      emails: mongoose.Schema.Types.Mixed,
      photos: mongoose.Schema.Types.Mixed
    }));
  }

  create(user) {
    return this.model.create(user).then((user) => user);
  }

  findOrCreate(user) {
    const foundUser = this.model.find({ id : user.id });
    if (foundUser) {
      return foundUser
    }
    return this.create(user);
  }
}


module.exports  = new User();

