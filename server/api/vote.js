
const router = require('express').Router();
const Poll = require('./../models/Poll');

router.post('/:poll_id', (req, res) => {
  const ip = req.ips[0];
  const pollId = req.params.poll_id;

  Poll.find({_id: pollId})
    .then((poll) => {
      res.json(poll);
      // poll.votes.push({ ip: ip, option: req.body.option })
      // addVote(id, poll.votes)
      //   .then((res) => {
      //     res.json(res);
      //   })
    })

});

function addVote(id, votes) {
  return Poll.findByIdAndUpdate({ _id: id}, votes)
}


module.exports = router;