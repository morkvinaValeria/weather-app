const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema(
  {
    weatherObject: {
      type: JSON,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const WeatherModel = mongoose.model('Weather', weatherSchema);

module.exports = WeatherModel;
