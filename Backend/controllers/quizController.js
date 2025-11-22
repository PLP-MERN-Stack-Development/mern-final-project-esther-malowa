import Quiz from "../models/Quiz.js";
import Course from "../models/Course.js";

export const addQuiz = async (req, res) => {
  try {
    const { courseId } = req.params;
    const quiz = await Quiz.create({ ...req.body, course: courseId });

    await Course.findByIdAndUpdate(courseId, {
      $push: { quizzes: quiz._id },
    });

    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit quiz answers
export const submitQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] && answers[i] === q.correctAnswer) score++;
    });

    res.status(200).json({ score, total: quiz.questions.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
