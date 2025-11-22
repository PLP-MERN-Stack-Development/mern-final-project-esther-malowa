import express from "express";
import { createCourse, updateCourse, deleteCourse, getCourses } from "../controllers/courseController.js";

const router = express.Router();

router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);
router.get("/", getCourses);

export default router;
