const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    token: { type: Number }   // ⭐ ADD THIS
  },
  { timestamps: true }
);
