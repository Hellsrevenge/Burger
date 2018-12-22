var burger = require('../models/burger');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    burger.selectAll(function (burgers) {
        res.render('index', {burgers: burgers});
    });
});

router.get('/:burger_id', function (req, res) {
    burger.selectOne(req.params.burger_id, function (burger) {
        res.render('edit', {burger: burger});
    });
});

module.exports = router;
