const mongoose = require('mongoose');
const envConfig = require('../env-config');
const { db } = envConfig;

const connectDB = () => {
  const connect = () => {
    mongoose
      .connect(
        `mongodb+srv://${db.user}:${db.password}@${db.cluster}/${db.name}`,
        {
          useNewUrlParser: true,
          retryWrites: true,
          useUnifiedTopology: true
        }
      )
      .then(() => {
        return console.log('Successfully connected to db');
      })
      .catch((error) => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};

module.exports = connectDB;
