router.post("/", async (req, res) => {
  try {
    // ⭐ get last appointment (highest token)
    const last = await Appointment.findOne().sort({ token: -1 });

    // ⭐ next token number
    const nextToken = last ? last.token + 1 : 1;

    // ⭐ create appointment with token
    const appointment = await Appointment.create({
      name: req.body.name,
      phone: req.body.phone,
      date: req.body.date,
      token: nextToken
    });

    // ⭐ send token back to frontend
    res.json(appointment);

  } catch (err) {
    console.error("SAVE ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});
