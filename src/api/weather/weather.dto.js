const getWeatherSchema = {
  params: {
    type: 'object',
    properties: {
      city: { type: 'string' }
    },
    required: ['city']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        weatherResult: {
          type: 'object',
          properties: {
            coord: {
              type: 'object',
              properties: {
                lon: { type: 'number' },
                lat: { type: 'number' }
              }
            },
            weather: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'number' },
                  main: { type: 'string' },
                  description: { type: 'string' },
                  icon: { type: 'string' }
                }
              }
            },
            base: { type: 'string' },
            main: {
              type: 'object',
              properties: {
                temp: { type: 'number' },
                pressure: { type: 'number' },
                humidity: { type: 'number' },
                temp_min: { type: 'number' },
                temp_max: { type: 'number' }
              }
            },
            visibility: { type: 'number' },
            wind: {
              type: 'object',
              properties: {
                speed: { type: 'number' },
                deg: { type: 'number' }
              }
            },
            clouds: {
              type: 'object',
              properties: {
                all: { type: 'number' }
              }
            },
            dt: { type: 'number' },
            sys: {
              type: 'object',
              properties: {
                type: { type: 'number' },
                id: { type: 'number' },
                message: { type: 'number' },
                country: { type: 'string' },
                sunrise: { type: 'number' },
                sunset: { type: 'number' }
              }
            },
            id: { type: 'number' },
            name: { type: 'string' },
            cod: { type: 'number' }
          }
        }
      }
    }
  }
};

module.exports = getWeatherSchema;
