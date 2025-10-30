import express from "express";
import {
    getClasses,
    getClass,
    createClass,
    updateClass,
    deleteClass
} from "../controllers/classController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(protect, admin); // All class routes require admin

router.get("/", getClasses);
router.get("/:id", getClass);
router.post("/", createClass);
router.put("/:id", updateClass);
router.delete("/:id", deleteClass);

export default router;

