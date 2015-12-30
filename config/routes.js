var http=require('http');
var request = require('request');
var stats = require('../server/controllers/stats.js');

 module.exports = function(app) {

	app.get('/get_scores', function(req, res){
		var url ='http://api.sportradar.us/nfl-t1/2015/REG/schedule.json?api_key=dpfgaza5m4hjdtjwrbbfxmjx';
		var sports_data = '';
		request(url, function(err, response, body){
			
			if(err){
				console.log('Error');
			} else {
				//data is not passing into this var outside of the function
				sports_data+= body;
				//console.log(sports_data);
			}
			//must be in this requet URL!!!
			res.send(sports_data);
		});
		//Data 
		
		
		
	});
		
	
	
 };