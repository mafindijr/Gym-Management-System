import express from "express";
import {
    getTrainers,
    getTrainer,
    createTrainer,
    updateTrainer,
    deleteTrainer
} from "../controllers/trainerController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(protect, admin); // All trainer routes require admin

router.get("/", getTrainers);
router.get("/:id", getTrainer);
router.post("/", createTrainer);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);

export default router;

