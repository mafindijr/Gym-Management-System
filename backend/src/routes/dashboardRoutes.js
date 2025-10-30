import express from "express";
import { getAdminDashboard } from "../controllers/dashboardController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(protect, admin); // Admin only

router.get("/", getAdminDashboard);

export default router;

