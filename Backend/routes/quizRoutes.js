import express from "express";
import { addQuiz, submitQuiz } from "../controllers/quizController.js";

const router = express.Router();

router.post("/:courseId", addQuiz);
router.post("/submit/:quizId", submitQuiz);

export default router;
