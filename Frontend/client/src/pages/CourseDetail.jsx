import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import QuizComponent from "../components/QuizComponent";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${id}`).then((res) => setCourse(res.data));
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{course.title}</h2>
        <p>{course.description}</p>
        <VideoPlayer videoUrl={course.videoUrl} />
        <QuizComponent quiz={course.quiz} />
      </div>
    </>
  );
}
