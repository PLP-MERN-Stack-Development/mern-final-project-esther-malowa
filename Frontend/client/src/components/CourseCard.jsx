import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-gray-600 mb-2">{course.description.slice(0, 80)}...</p>
      <Link
        to={`/courses/${course._id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
