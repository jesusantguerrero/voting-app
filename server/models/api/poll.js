const Router = require('express').Router();

Router.get('/api/poll/create');
Router.get('/api/poll/delete');
Router.get('/api/poll/update');
Router.get('/api/poll/addVote');

Router.get('/api/poll/addOption');
Router.get('/api/poll/deleteOption');



export default Router;