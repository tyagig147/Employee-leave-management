const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model("Leave", LeaveSchema);
