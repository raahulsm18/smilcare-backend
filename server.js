const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("SmileCare Backend is running 🚀");
});

// appointment routes
app.use("/api/appointments", require("./routes/appointmentRoutes"));

// database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
