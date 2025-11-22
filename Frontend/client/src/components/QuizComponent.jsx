import { useState } from "react";

export default function QuizComponent({ quiz }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      {quiz.questions.map((q, i) => (
        <div key={i}>
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt, idx) => (
            <label key={idx} className="block">
              <input
                type="radio"
                name={`q${i}`}
                value={opt}
                onChange={() => setAnswers({ ...answers, [i]: opt })}
              />{" "}
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Quiz
      </button>
      {submitted && <p className="text-green-600 mt-2">Quiz submitted!</p>}
    </form>
  );
}
