const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ message: "Appointment booked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

module.exports = router;
