const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String], // URLs or file paths
  accommodation: { type: String }, // e.g. "4 Person Accommodation"
  rooms: { type: String }, // e.g. "2 Rooms"
  bedType: { type: String }, // e.g. "King Size Bed"
  amenities: [String], // e.g. ["High-Speed Wifi", "Internet", "Hot Water", "Television"]
  price: { type: Number, required: true }, // e.g. 3000
  originalPrice: { type: Number }, // e.g. 3600 (before discount)
  discount: { type: String }, // e.g. "20% OFF"
  perNightDetails: {
    hutPerNight: { type: String }, // e.g. "1 Hut Per Night"
    adults: Number,
    children: Number
  },
  quantityAvailable: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', serviceSchema);
