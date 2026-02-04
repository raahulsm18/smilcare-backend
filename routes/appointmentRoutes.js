const express = require("express");
const router = express.Router();   // ⭐ REQUIRED
const Appointment = require("../models/Appointment");

/* =========================
   CREATE (with token)
========================= */
router.post("/", async (req, res) => {
  try {
    const { name, phone, date } = req.body;

    // get last token
    const last = await Appointment.findOne().sort({ token: -1 });

    const nextToken = last ? last.token + 1 : 1;

    const appointment = await Appointment.create({
      name,
      phone,
      date,
      token: nextToken
    });

    res.json(appointment);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET all
========================= */
router.get("/", async (req, res) => {
  const data = await Appointment.find().sort({ token: 1 });
  res.json(data);
});

/* =========================
   DELETE
========================= */
router.delete("/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
