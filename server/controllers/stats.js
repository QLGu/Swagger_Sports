var http = require('http');

module.exports = function() {
	return{

		schedules: function(request, response){
			var options = {host: 'api.sportradar.us',
						   path: '/nfl-t1/2015/REG/schedule.json?api_key=dpfgaza5m4hjdtjwrbbfxmjx'};

			http.request(options, function(res){
				var data='';
				res.on('data', function(chunk){
					data = chunk;
				});
				res.on('end', function(){
						
					
				});
			});
		}
	};
}();