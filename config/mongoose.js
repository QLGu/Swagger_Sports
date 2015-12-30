var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/swagger_sports');
//set models path
var models_path =__dirname + '/../server/models';
//read through models find .js models file and require them 
fs.readdirSync(models_path).forEach(function(js_file){
	if(js_file.indexOf('.js')>0){
		require(models_path + '/' +js_file);
	}
});