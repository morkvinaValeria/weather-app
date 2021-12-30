const Weather = require('./weather.service');

const getWeatherController = async (request, reply) => {
  const { city } = request.params;
  try {
    const service = new Weather();
    const result = await service.getWeather(city);
    reply.code(200).send({ weatherResult: result });
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

module.exports = getWeatherController;
