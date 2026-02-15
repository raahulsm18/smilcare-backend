const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");


/* ===============================
   GET all appointments
================================ */
router.get("/", async (req, res) => {
  try {
    const data = await Appointment.find().sort({ date: 1, token: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/* ===============================
   POST new appointment (FIXED TOKEN LOGIC)
================================ */
router.post("/", async (req, res) => {
  try {
    let { name, phone, date } = req.body;

    // ⭐ normalize date
    const normalizedDate = new Date(date).toISOString().split("T")[0];

    // ⭐ count only same date
    const count = await Appointment.countDocuments({ date: normalizedDate });

    const nextToken = count + 1;

    const appointment = await Appointment.create({
      name,
      phone,
      date: normalizedDate,
      token: nextToken
    });

    res.json(appointment);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


/* ===============================
   DELETE
================================ */
router.delete("/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
