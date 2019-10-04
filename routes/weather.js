var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    weatherData: {
      location: 'London, ON',
      temperature: 10,
      weatherDescription: 'raining'
    }
  });
});

module.exports = router;
