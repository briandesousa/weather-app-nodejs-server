var express = require('express');
var router = express.Router();

router.get('/:location?', function (req, res, next) {
  res.json(getStubWeatherData(req.params.location));
});

function getStubWeatherData(location) {
  var currentSeconds = new Date().getSeconds();
  return {
    weather: {
      location: location || 'londonon',
      temperature: `${currentSeconds / 2}\u2103`,
      weatherDescription: currentSeconds % 2 == 0 ? 'partly cloudy' : 'sunny'
    }
  };
}

module.exports = router;
