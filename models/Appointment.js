const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
