var burger = require('../models/burger');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    burger.selectAll(function (burgers) {
        res.render('index', {burgers: burgers});
    });
});


router.post("/burgers", function(req, res) {
    burger.insertOne(req.body, function () {
        res.redirect("/");
    });
});


router.put("/burgers/:burger_id", function(req, res) {
    burger.updateOne(req.params.burger_id, {devoured:1}, function () {

        res.redirect("/");
    });
});

module.exports = router;
