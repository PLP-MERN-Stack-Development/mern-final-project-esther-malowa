import Lesson from "../models/Lesson.js";
import Course from "../models/Course.js";

export const addLesson = async (req, res) => {
  try {
    const { courseId } = req.params;
    const lesson = await Lesson.create({ ...req.body, course: courseId });

    await Course.findByIdAndUpdate(courseId, {
      $push: { lessons: lesson._id },
    });

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
