const router = require('express').Router();
const Poll = require('./../models/Poll');

router.post('/:poll_id', (req, res) => {
  console.log('here');
  const pollId = req.params.poll_id
  const data = JSON.parse(req.body.data); 

  Poll.findOne({ _id: pollId})
    .then((poll) => {
      poll.options.push(data.option)
      Poll.findOneAndUpdate({ _id: pollId}, {options: poll.options})
      res.end({ok: 'ok'})
    })
});


router.delete('/:poll_id', (req, res) => {
//   
});

module.exports = router