//IMPORT MODULES
const express = require('express')
const router = express.Router();
const models = require('../server/models');

//=====================================
// BY CONTINENT
const findAllContinents = ((req,res) => {
  return models.Locations.findAll({
    order: [['continent', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByContinent = ((req, res) => {
		models.Locations.findAll({
      where: {
        continent: req.params.continent
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

  //=====================================
  // BY COUNTRY
const findAllCountries = ((req,res) => {
  return models.Locations.findAll({
    order: [['country', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByCountry = ((req, res) => {
		models.Locations.findAll({
      where: {
        id: req.params.id
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

  //=====================================
  // BY STATE
const findAllStates = ((req,res) => {
  return models.Locations.findAll({
    order: [['state', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByState = ((req, res) => {
		models.Locations.findAll({
      where: {
        state: req.params.state
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

  //=====================================
  // BY REGION
const findAllRegions = ((req,res) => {
  return models.Locations.findAll({
    order: [['region', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByRegion = ((req, res) => {
		models.Locations.findAll({
      where: {
        region: req.params.region
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

  //=====================================
  // BY CITY

const findAllCities = ((req,res) => {
  return models.Locations.findAll({
    order: [['city', 'ASC']]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
});

const findByCity = ((req, res) => {
		models.Locations.findAll({
      where: {
        city: req.params.city
      }
    })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err)
		})
	});

// const getAllExperienceLocations = (req,res) => {

//   models.ExperiencesLocations.findAll({
//     where: {
//       LocationId: req.params.countryId
//     },
//     include:[models.Experiences,models.Locations]
//   })
//   .then(data => res.send(data))
//   .catch(error => res.status(500).send(error))
// }
const getExperiences = (req,res) => {
  models.ExperiencesLocations.findAll({
    where:{
      LocationId:req.params.locationId
    },
    include:[models.Experiences]
  })
  .then(data => res.send(data))
  .catch(err => res.status(500).send(err))
};


//ROUTES
router.route('/country/:locationId')
  .get(getExperiences)

router.route('/continents')
  .get(findAllContinents)
router.route('/continents/:continent')
  .get(findByContinent)
router.route('/countries')
  .get(findAllCountries)
router.route('/countries/:id')
  .get(findByCountry)
router.route('/states')
  .get(findAllStates)
router.route('/states/:state')
  .get(findByState)
router.route('/regions')
  .get(findAllRegions)
router.route('/regions/:region')
  .get(findByRegion)
router.route('/cities')
  .get(findAllCities)
router.route('/cities/:city')
  .get(findByCity)

//EXPORTS
module.exports = router
