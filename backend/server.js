var express = require("express");
var mongo = require("mongodb").MongoClient;
var app=express();



mongo.connect("mongodb://localhost:27017/test", { useNewUrlParser: true } ,function(err,db){
    if(!err){
        console.log("we are connected to database");
    }
})

var server=app.listen(3000,function(){
    console.log("server connected",server.address().port);
})