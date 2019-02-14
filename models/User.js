const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
	// User login information
	email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
         type: String,
         required: true
    },
    lastName: {
         type: String,
         required: true
    },

	// Array of each meal plan
	mealplans: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Mealplan"
	}]
});

module.exports = mongoose.model('User', User);