const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    token: { type: Number, required: true } // ⭐ MUST ADD
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
