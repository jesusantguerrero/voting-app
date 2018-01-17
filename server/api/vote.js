
const router = require('express').Router();
const Poll = require('./../models/Poll');

router.post('/:poll_id', (req, res) => {
  const ip = req.ips[0];
  const pollId = req.params.poll_id;
  console.log(req.body)
  Poll.findById({_id: pollId})
    .then((poll) => {
     const votes =  poll.votes.slice()
     votes.push({ ip: ip, option: req.body.option })
      
      addVote(pollId, votes)
        .then((poll) => {
          res.json(poll);
        })
    })

});

function addVote(id, votes) {
  return Poll.findOneAndUpdate({ _id: id}, { votes: votes })
}


module.exports = router;