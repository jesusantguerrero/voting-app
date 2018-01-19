const router = require('express').Router();
const Poll = require('./../models/Poll');

router.post('/:poll_id', (req, res) => {
  const pollId = req.params.poll_id
  const data = JSON.parse(req.body.data); 

  Poll.findOne({ _id: pollId})
    .then((poll) => {
      const options = poll.options;
      options.push(data.option);

      Poll.findOneAndUpdate({ _id: pollId}, { options: options })
      res.json(options)
    }).catch((err) => { res.end({ err : err.toString()}); })
})

module.exports = router