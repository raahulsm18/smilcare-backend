const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },

    phone: { 
      type: String, 
      required: true 
    },

    date: { 
      type: String, 
      required: true 
    },

    token: { 
      type: Number, 
      required: true 
    }
  },
  { timestamps: true }
);

/* 🔥 UNIQUE PHONE PER DATE */
appointmentSchema.index({ phone: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
