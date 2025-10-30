import express from "express";
import {
    getAvailableClasses,
    enrollInClass,
    updateProfile,
    getDashboardStats
} from "../controllers/studentController.js";
import { getMemberPayments, createMemberPayment } from "../controllers/paymentController.js";
import { protect, member } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(protect, member); // All student routes require authentication

// Classes
router.get("/classes", getAvailableClasses);
router.post("/classes/:id/enroll", enrollInClass);

// Payments
router.get("/payments", getMemberPayments);
router.post("/payments", createMemberPayment);

// Profile
router.put("/profile", updateProfile);

// Dashboard
router.get("/dashboard", getDashboardStats);

export default router;

