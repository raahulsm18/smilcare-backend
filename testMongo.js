require("dotenv").config();
const mongoose = require("mongoose");

console.log("⏳ Starting MongoDB connection...");

mongoose
  .connect(process.env.MONGO_URI, {
    family: 4,               // 👈 FORCE IPv4 (THIS FIXES IT)
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err.message);
    process.exit(1);
  });
