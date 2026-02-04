const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");


/* ===============================
   GET all appointments
================================ */
router.get("/", async (req, res) => {
  try {
    const data = await Appointment.find().sort({ token: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/* ===============================
   POST new appointment (TOKEN LOGIC)
================================ */
router.post("/", async (req, res) => {
  try {
    const { date } = req.body;

    // ⭐ find last token ONLY for SAME DATE
    const last = await Appointment
      .findOne({ date })
      .sort({ token: -1 });

    const nextToken = last ? last.token + 1 : 1;

    const appointment = await Appointment.create({
      ...req.body,
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
