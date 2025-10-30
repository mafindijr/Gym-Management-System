import express from "express";
import {
    getPayments,
    getPaymentStats,
    createPayment
} from "../controllers/paymentController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(protect, admin); // Admin payment routes

router.get("/", getPayments);
router.get("/stats", getPaymentStats);
router.post("/", createPayment);

export default router;

