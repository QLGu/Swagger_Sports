var express=require('express');
var path = require('path');
var bodyParser= require('body-parser');
var app = express();



app.use(express.static(path.join(__dirname,"./client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//require mongoose config


require('./config/mongoose.js');
var routes_path=require('./config/routes.js');
//pass in app to routes
routes_path(app);

app.listen('8888', function(){
	console.log('Swagger Sports at 8888');
});


