const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const RouteSchema = new mongoose.Schema({
  driverId: { type: String, default: uuidv4, unique: true },
  pickupPoints: [{ type: String, required: true }],
  dropOffPoints: [{ type: String, required: true }],
  assignedDriver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  shuttleUsageData: [{ timeSlot: String, passengerCount: Number }]
});

module.exports = mongoose.model('Route', RouteSchema);