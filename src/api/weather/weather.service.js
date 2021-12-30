const axios = require('axios');
const WeatherModel = require('../../models/weather');
const HttpError = require('../../errors/httpErrors');
const envConfig = require('../../env-config');

class Weather {
  async getWeather(city) {
    try {
      const now = new Date();
      now.setHours(now.getHours() - 2);
      const isoTimestamp = now.toISOString();
      const weatehrResults = await WeatherModel.find({
        city: city
      });
      const validWeather = weatehrResults.filter(
        (res) => new Date(res.updated_at) >= new Date(isoTimestamp)
      );
      if (validWeather.length) {
        return validWeather.weatherObject;
      }
      const result = await axios({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${envConfig.key}`
      });
      if (result.status == 200) {
        await WeatherModel.create({
          weatherObject: result.data,
          city: result.data.name
        });
        return result.data;
      }
    } catch (error) {
      throw new HttpError(error);
    }
  }
}
module.exports = Weather;
