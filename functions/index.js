var functions = require('firebase-functions');
var express =require("express") ;
var app =express();

var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('views', './views');
app.set('view engine', 'hbs');

app.get("/",function(req, res) {
    res.send("hello");
});

exports.app = functions.https.onRequest(app);