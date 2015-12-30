var mongoose = require('mongoose');

//Create User Schema 
var betSchema = new mongoose.Schema({
	better: {type: mongoose.Schema.Types.ObjectId},
	bettee: {type: mongoose.Schema.Types.ObjectId}
});


//Create User Instance
mongoose.model("Bet", betSchema);