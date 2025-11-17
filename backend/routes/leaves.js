const express = require("express");
const router = express.Router();
const Leave = require("../models/Leave");

// Get all leaves
router.get("/", async (req, res) => {
  const leaves = await Leave.find().sort({ createdAt: -1 });
  res.json(leaves);
});

// Create a leave request
router.post("/", async (req, res) => {
  const leave = new Leave(req.body);
  await leave.save();
  res.json(leave);
});

// Update leave status
router.put("/:id", async (req, res) => {
  const { status } = req.body;
  const leave = await Leave.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(leave);
});

module.exports = router;
