var http=require('http');
var options = {
	host: 'api.sportradar.us',
	//schedule data
	path: '/nfl-t1/2015/REG/schedule.json?api_key=dpfgaza5m4hjdtjwrbbfxmjx'
};

//VENMO
//App ID2969	Secret:bDxv2adMDeDsxpnKG6FCjZDBVW4dPERK

callback = function(response) {
	var str='';
	response.on('data', function(chunk){
		str += chunk;
	});
	response.on('end', function(){
		console.log(str);
	});
	
};


//
http.request(options, callback).end();