const env = process.env.NODE_ENV || 'dev';

const envConfig = require(`./configs/${env}`);

if (!envConfig) {
  throw new Error('Config for given NODE_ENV was not found');
}

module.exports = envConfig;
