const Router = require('express').Router();
const Poll = require('./../models/Poll');

Router.post('/api/poll/create', (req, res) => {
  const p = {
    userId: req.user.id,
    options: req.body.options.split(','),
    votes: [],
  }

  Poll.create(p)
    .then((poll) => {
      if (poll)
        res.json({result: 200, poll})
    })
    .catch((err) => {
      res.json({result: 500, err})
    });
});

Router.get('/api/poll/delete');
Router.get('/api/poll/update');
Router.get('/api/poll/addVote');

Router.get('/api/poll/addOption');
Router.get('/api/poll/deleteOption');



module.exports = Router;