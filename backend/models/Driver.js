const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const DriverSchema = new mongoose.Schema({
  driverId: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  vehicleAssigned: { type: String },
  contactNumber: { type: String, required: true }
});

module.exports = mongoose.model('Driver', DriverSchema);