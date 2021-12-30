const fastify = require('fastify');
const fastifyCors = require('fastify-cors');
const envConfig = require('./src/env-config');
const swagger = require('fastify-swagger');
const connectDB = require('./src/db');
const swaggerConfig = require('./src/env-config/swagger.config');
const { weather } = require('./src/api');
const server = fastify();

server.register(fastifyCors, {
  origin: ['weather-app-zalic.herokuapp.com'],
  allowedHeaders: 'Content-Type,Authorization',
  methods: ['GET', 'POST', 'PUT']
});
server.register(swagger, swaggerConfig);
server.route(weather);
connectDB();

server.listen(envConfig.port || 3000, envConfig.host, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  server.swagger();
  console.log(`Server listening at port ${envConfig.port}`);
});
