import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../useAuthStore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuthStore();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const role = await register(formData); // get role from store
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Registration failed");
  }
};



  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-96 space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center">Create Account</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <input
            type="text"
            placeholder="Name"
            className="border rounded w-full p-2"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded w-full p-2"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded w-full p-2"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <select
            className="border rounded w-full p-2"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Admin</option>
          </select>

          <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
