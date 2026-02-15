const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const appointmentRoutes = require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

/* ---------- Middlewares ---------- */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://smilcare-frontend.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

/* ---------- Health Routes ---------- */
app.get("/", (req, res) => {
  res.send("SmileCare Backend is running 🚀");
});

app.get("/api", (req, res) => {
  res.json({ message: "SmileCare API working ✅" });
});

/* ---------- API Routes ---------- */
app.use("/api/appointments", appointmentRoutes);
app.use("/api/auth", authRoutes);

/* ---------- MongoDB ---------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));

/* ---------- Server ---------- */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
