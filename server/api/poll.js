const router = require('express').Router();
const Poll = require('./../models/Poll');

router.post('/create', (req, res, next) => {
  const id = (req.user) ? req.user.id : 0;

  const p = {
    userId: id,
    title: req.body.title,
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

router.get('/', (req, res) => {
  Poll.find().then((polls) => {
    res.json(polls);
  });
})

router.get('/:id', (req, res) => {
  Poll.findOne({_id: req.params.id}).then((polls) => {
    res.json(polls);
  });

})

router.get('/:id/edit', (req, res) => {
  Poll.find({_id: req.params.id}).then((polls) => {
    res.json(polls);
  });

})

router.put('/update/:id', (req, res) => {
  const p = {
    title: req.body.title,
    options: req.body.options.split(','),
  }

  Poll.findByIdAndUpdate({ _id:req.params.id } , p)
    .then((poll) => {
      if (poll)
        res.json({result: 200, poll})
    })
    .catch((err) => {
      res.json({result: 500, err})
    });
});

router.delete('/delete/:id', (req, res) => {
  Poll.findByIdAndRemove({ _id: req.params.id }).then((poll) => {
    res.json(poll)
  })
});


module.exports = router;