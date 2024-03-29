var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


//Create User Schema 
var userSchema = new mongoose.Schema({
	username:{type: String, lowercase: true, unique: true},
	hash: String, 
	salt: String



});


userSchema.methods.setPassword = function (password){
	//random string 
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf25Sync(password,this.salt,1000, 64).toString('hex');
};
userSchema.methods.validPassword = function(password) {
	var hash = crypto.pbkdf25Sync(password,this.salt,1000, 64).toString('hex');
	return this.hash === hash;
};
//generate JSON WEB TOKEN
userSchema.methods.generateJWT = function() {
	var today = new Date();
	var exp = new Date(today);
	exp.setDate(today.getDate() + 60);
	return jwt.sign({
		_id: this._id,
		username: this.username,
		exp: parseInt(exp.getTime()/1000),
	}, 'SECRET');
};


//Create User Instance
mongoose.model("User", userSchema);