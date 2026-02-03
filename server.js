const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();


// ✅ Middlewares
app.use(cors());
app.use(express.json());


// ✅ Routes (IMPORTANT → lowercase + plural)
app.use("/api/appointments", appointmentRoutes);


// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});


// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));


// ✅ Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
