const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// POST appointment
router.post("/", async (req, res) => {
  try {
    const { name, phone, date } = req.body;

    const appointment = new Appointment({
      name,
      phone,
      date,
    });

    await appointment.save();
    res.status(201).json({ message: "Appointment booked" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
