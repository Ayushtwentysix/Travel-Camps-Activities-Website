var functions = require('firebase-functions');
var express =require("express") ;
var app =express();

var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));