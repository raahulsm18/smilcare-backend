const router = require("express").Router();
const Appointment = require("../models/Appointment");

router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
