var RESOURCE_NAME = 'veg';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME;

var db = require("../../db/veg");

module.exports = function(router) {
    'use strict';

    router.route(URI).get(function(req, res, next) {
        console.log("GET VEG CART");

        var criteria = { duration: {$gte: 10}}

        db.select(criteria, function(err, docs) {
            if(err) {
                console.log(err);
                res.status(500);
                res.send("error connecting to db")
            } else {
                if(docs.length == 0) {
                    res.status(400)
                }
                console.log("Retrieved courses = %d", docs.length);
                res.send(docs)
            }
        })
    })

    router.route(URI).post(function(req, res, next){
        console.log("Post VEG CART");

        var doc = req.body;

        db.save(doc, function(err, saved) {
            if(err){
                
            }
        })
    })
}
