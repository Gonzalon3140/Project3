const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//recipe Schema 
var Recipe = new Schema({
	name: {
		type: String
	},
	url: {
		type: String
	},
	image: {
		type: String
	},
	creator: {
		type: String
	},
	servings: {
		type: Number
	},

	ingredients: [{
		amount: String,
		measurement: String,
		ingredient: String
	}],

	tags: {
		type: [String]
	},
	meal: {
		type: String
	},
	
})

module.exports = mongoose.model('Recipe', Recipe);
