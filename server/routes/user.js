const route = require('express').Router();
const path = require('path');

route.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/user/login.html'));
});

route.post('/login', (req, res, next) => {});


module.exports = route;