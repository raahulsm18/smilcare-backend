const express = require("express");
const router = express.Router(); // ⭐ MUST EXIST

const Appointment = require("../models/Appointment");


// ✅ GET all appointments
router.get("/", async (req, res) => {
  try {
    const data = await Appointment.find().sort({ token: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ POST new appointment with token
router.post("/", async (req, res) => {
  try {
    const last = await Appointment.findOne().sort({ token: -1 });

    const nextToken = last ? last.token + 1 : 1;

    const appointment = await Appointment.create({
      name: req.body.name,
      phone: req.body.phone,
      date: req.body.date,
      token: nextToken
    });

    res.json(appointment);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


// ✅ DELETE appointment
router.delete("/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
