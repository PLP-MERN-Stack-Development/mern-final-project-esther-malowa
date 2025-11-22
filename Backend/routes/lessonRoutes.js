import express from "express";
import { addLesson } from "../controllers/lessonController.js";

const router = express.Router();

router.post("/:courseId", addLesson);

export default router;
