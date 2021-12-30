const fastify = require('fastify');
const envConfig = require('./src/env-config');
const connectDB = require('./src/db');
const swagger = require('fastify-swagger');
const swaggerConfig = require('./src/env-config/swagger.config');
const server = fastify();

//!fastify-cors
server.register(swagger, swaggerConfig);

connectDB();

server.listen(envConfig.port || 3000, envConfig.host, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  server.swagger();
  console.log(`Server listening at port ${envConfig.port}`);
});
