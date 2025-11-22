import express from "express";
import { enrollCourse, trackProgress } from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/enroll", enrollCourse);
router.get("/:studentId/:courseId", trackProgress);

export default router;
