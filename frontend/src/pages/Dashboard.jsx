import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get("/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center">
        <p className="text-gray-300 text-lg">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white p-6 font-inter">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Welcome, {user?.username || "Coder"}
        </h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded transition shadow-md hover:shadow-lg"
        >
          Logout
        </button>
      </header>

      {/* Profile Card */}
      <section className="bg-[#111827] p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl transition duration-300 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
        <ul className="space-y-3 text-gray-300">
          <li>
            <span className="text-gray-400">Email:</span> {user?.email}
          </li>
          <li>
            <span className="text-gray-400">Codeforces Handle:</span> {user?.handle}
          </li>
        </ul>
      </section>

      {/* Recommendations / Placeholder */}
      <section className="bg-[#111827] p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl transition duration-300">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        <p className="text-gray-400">
          Here you'll see your recent failed submissions and recommended problems to practice.
        </p>
      </section>
    </div>
  );
}
