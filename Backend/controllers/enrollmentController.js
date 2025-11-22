import Enrollment from "../models/Enrollment.js";

export const enrollCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const exists = await Enrollment.findOne({ student: studentId, course: courseId });
    if (exists) return res.status(400).json({ message: "Already enrolled" });

    const enrollment = await Enrollment.create({ student: studentId, course: courseId });
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const trackProgress = async (req, res) => {
  try {
    const { studentId, courseId } = req.params;

    const enrollment = await Enrollment.findOne({ student: studentId, course: courseId })
      .populate("completedLessons")
      .populate("course");

    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
