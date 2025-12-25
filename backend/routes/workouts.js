const express = require("express");
const Workout = require("../models/workoutModel")
const router = express.Router();
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

//require auth for all workout routes
router.use(requireAuth); 

// Sample route to get all workouts
router.get("/", getWorkouts);

// Get a single workout by ID
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout by ID
router.delete("/:id", deleteWorkout);

// UPDATE a workout by ID
router.patch("/:id", updateWorkout);

module.exports = router;
