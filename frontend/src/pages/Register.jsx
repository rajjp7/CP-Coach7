import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "", // <-- changed from email
    password: "",
    handle: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post("/auth/register", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-white font-inter">
        Create your account
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#111827] w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-700 space-y-6"
      >
        <div>
          <label htmlFor="username" className="block mb-2 text-gray-300">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label htmlFor="handle" className="block mb-2 text-gray-300">
            Codeforces Handle
          </label>
          <input
            type="text"
            name="handle"
            value={formData.handle}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-400 hover:underline"
          >
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}
