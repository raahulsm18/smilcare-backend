require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("SmileCare Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
