const router = require('express').Router();
const Poll = require('./../models/Poll');

router.post('/:poll_id', (req, res) => {
  const pollId = req.params.poll_id
  Poll.findOne({ _id: pollId})
    .then((poll) => {
      poll.options.push(req.body.option)
      Poll.findOneAndUpdate({ _id: pollId}, {options: poll.options})
      res.end({ok: 'ok'})
    })
});


router.delete('/:poll_id', (req, res) => {

});

module.exports = router