const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },

    // ⭐ REQUIRED FOR TOKEN SYSTEM
    token: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
