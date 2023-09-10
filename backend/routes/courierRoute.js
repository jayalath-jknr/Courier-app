import express from 'express';
import {
  createCourier,
  getAllCouriers,
  getCourierById,
  updateCourier,
  deleteCourier,
} from '../controllers/courierController.js';

const router = express.Router();

// Create a new courier
router.post("/addCourier", createCourier);

// Get all couriers
router.get("/", getAllCouriers);

// Get a single courier by ID
router.get("/getCourier/:id", getCourierById);

// Update a courier by ID
router.patch("/updateCourier/:id", updateCourier);

// Delete a courier by ID
router.delete("/deleteCourier/:id", deleteCourier);

export default router;
