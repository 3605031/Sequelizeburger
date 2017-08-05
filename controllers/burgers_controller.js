var express = require('express');
var router = express.Router();
// Requiring our models
var db = require("../models");


router.get("/", function(req,res){
    
    
    db.burger.findAll({}).then(function(data){
        var hbsObject = {
            burgers : data
        };
        res.render("index",hbsObject);
    })
});

router.post("/", function(req,res){
    
    db.burger.create({
        burger_name: req.body.name
    }).then(function(){
        res.redirect("/");
    })
});

router.put("/:id", function(req,res){
    
    
    db.burger.update({
        devoured: true
    }, {
        where:{
            id: req.params.id
        }
    }).then(function(){
        res.redirect("/");
    })
    
})

// Export routes for server.js to use.
module.exports = router;