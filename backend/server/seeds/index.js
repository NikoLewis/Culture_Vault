//Import Seed Files
let users = require('./users-seed.js');
let locations = require('./locations-seed.js');
let ingredient = require('./ingredient-seed.js')
//let experiences = require('/experiences-seed.js');

//Import Models
let models = require('../models');


const seedFunction = () => {
	models.Users.create(users[0])
	models.Users.create(users[1])
	models.Users.create(users[2])
	models.Users.create(users[3])
	models.Users.create(users[4])

	models.Locations.create(locations[0])
	models.Locations.create(locations[1])
	models.Locations.create(locations[2])
	models.Locations.create(locations[3])
	models.Locations.create(locations[4])
	models.Locations.create(locations[5])

	// models.Experiences.create(experiences[0])
	// models.Experiences.create(experiences[1])	
	// models.Experiences.create(experiences[2])

	models.Ingredient.create(ingredients[0])
	models.Ingredient.create(ingredients[1])
	models.Ingredient.create(ingredients[2])
	models.Ingredient.create(ingredients[3])
	models.Ingredient.create(ingredients[4])

}

module.exports = seedFunction
