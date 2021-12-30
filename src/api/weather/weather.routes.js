const getWeatherSchema = require('./weather.dto');
const getWeatherController = require('./weather.controller');

const getWeather = {
  method: 'GET',
  url: '/weather/:city',
  schema: getWeatherSchema,
  handler: getWeatherController
};

module.exports = getWeather;
