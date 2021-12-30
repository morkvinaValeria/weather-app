const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    cluster: process.env.DB_CLUSTER,
    name: process.env.DB_NAME
  },
  port: process.env.PORT,
  host: '0.0.0.0'
  //   domain: 'measurment-assistant.herokuapp.com'
};
//!domain
