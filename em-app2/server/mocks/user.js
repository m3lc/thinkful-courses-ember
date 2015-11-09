module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    var usersData = [];
    for (var i = 10; i >= 1; i--) {
      usersData.push({
        id: i,
        username: "username" + i,
        firstName: "fname " + i,
        lastName: "lname " + i
      });
    }
    res.send({'users': usersData});
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id,
        username:"username"+req.params.id,
        firstName:"fname "+req.params.id,
        lastName:"lname "+req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    console.log(req.body.user);
    res.send({
      'users': {
        id: req.params.id,
            username:req.body.user.userName,
            firstName:req.body.user.firstName,
            lastName:req.body.user.lastName
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });


  app.use('/api/users', usersRouter);
};
