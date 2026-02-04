const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const appointmentRoutes = require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------- Routes ---------- */
app.get("/", (req, res) => {
  res.send("SmileCare Backend is running 🚀");
});

app.use("/api/appointments", appointmentRoutes);
app.use("/api/auth", authRoutes);

/* ---------- MongoDB ---------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));

/* ---------- Server ---------- */
const PORT = process.env.PORT || 10000; // Render needs 10000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
