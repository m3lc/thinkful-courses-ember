module.exports = function(app) {
    var express = require('express');
    var usersRouter = express.Router();

    var usersData = {
            'users': [{
                id:1,
                username: "user1",
                firstName: "fname1",
                lastName: "lname1"
            }, {
                id:2,
                username: "user2",
                firstName: "fname2",
                lastName: "lname2"
            }, {
                id:3,
                username: "user3",
                firstName: "fname3",
                lastName: "lname3"
            }, {
                id:4,
                username: "user4",
                firstName: "fname4",
                lastName: "lname4"
            }, {
                id:5,
                username: "user5",
                firstName: "fname5",
                lastName: "lname5"
            }]
        };

    usersRouter.get('/', function(req, res) {
        res.send(usersData);
    });
    usersRouter.post('/', function(req, res) {
        res.status(201).end({});
    });
    usersRouter.get('/:id', function(req, res) {
        res.send({
            'users': usersData.users[req.params.id?parseInt(req.params.id,10)-1:0]
        });
    });
    usersRouter.put('/:id', function(req, res) {
        res.send({
            'users': usersData.users[req.params.id?parseInt(req.params.id,10)-1:0]
        });
    });
    usersRouter.delete('/:id', function(req, res) {
        // res.status(204).end({});
        // res.status("204").end({});
        res.write("204");
        res.end();
    });
    app.use('/api/users', usersRouter);
};