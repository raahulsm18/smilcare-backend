const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  date: String,
  time: String,
  reason: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);
