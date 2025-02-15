const mongoose = require('mongoose');

function generateRandomBookingId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const BookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true, unique: true, default: generateRandomBookingId },
  employee: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' },
  from: { type: String, required: true },
  to: { type: String, required: true },
  vehicle: { type: String, required: true },
  requestPickupTime: { type: Date, required: true },
  pickupTime: { type: Date },
  plannedDrop: { type: Date },
  actualDrop: { type: Date }
});

module.exports = mongoose.model('Booking', BookingSchema);
