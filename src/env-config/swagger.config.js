const envConfig = require('./');

module.exports = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Weather-App',
      description: '',
      version: '0.1.0'
    },
    host:
      process.env.NODE_ENV == 'production'
        ? envConfig.domain
        : `${envConfig.host}:${envConfig.port}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};
