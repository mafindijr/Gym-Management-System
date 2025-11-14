import express from "express";
import { register, login, forgotPassword, resetPassword, getMe, bootstrapAdmin, updateProfile, changePassword } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", protect, getMe);
router.put("/me", protect, updateProfile);
router.post("/change-password", protect, changePassword);
// secure admin bootstrap (requires x-bootstrap-secret header)
router.post("/bootstrap-admin", bootstrapAdmin);

export default router;