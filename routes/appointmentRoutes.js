const express = require("express");
const router = express.Router();   // ⭐ MUST EXIST
const Appointment = require("../models/Appointment");


// GET all appointments
router.get("/", async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// POST new appointment
router.post("/", async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    const appointment = await Appointment.create(req.body);

    res.json(appointment);
  } catch (err) {
    console.log("SAVE ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
