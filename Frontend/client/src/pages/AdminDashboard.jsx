import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuthStore from "../useAuthStore";
import api from "../api"; // Use your axios instance with baseURL & JWT

export default function AdminDashboard() {
  const { user } = useAuthStore();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.role === "admin") fetchUsers();
  }, [user]);

  const approveInstructor = async (id) => {
    await api.put(`/admin/approve-instructor/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers();
  };

  const updateRole = async (id, role) => {
    await api.put(`/admin/update-role/${id}`, { role }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers();
  };

  const deactivateUser = async (id) => {
    await api.put(`/admin/deactivate/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await api.delete(`/admin/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers();
  };

  if (!user) return <p className="text-center mt-10">Loading user...</p>;
  if (user.role !== "admin") return <p className="text-center text-red-600 mt-10">Access denied</p>;

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome, {user.name}! Manage users, courses, and reports here.</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-gray-100 rounded shadow">
            <h3 className="font-semibold">Total Users</h3>
            <p className="text-xl font-bold">{users.length}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h3 className="font-semibold">Active Courses</h3>
            <p className="text-xl font-bold">15</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h3 className="font-semibold">Pending Approvals</h3>
            <p className="text-xl font-bold">
              {users.filter(u => u.role === "instructor" && !u.approved).length}
            </p>
          </div>
        </div>

        {/* User Table */}
        {loading ? <p className="mt-6 text-center">Loading users...</p> : (
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Role</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u._id} className="border-t text-center">
                    <td className="px-4 py-2">{u.name}</td>
                    <td className="px-4 py-2">{u.email}</td>
                    <td className="px-4 py-2">
                      <select
                        value={u.role}
                        onChange={e => updateRole(u._id, e.target.value)}
                        className="border rounded p-1"
                      >
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      {u.status === "active" ? "Active" : "Inactive"}
                      {!u.approved && u.role === "instructor" && (
                        <span className="text-yellow-600 ml-2">Pending Approval</span>
                      )}
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      {!u.approved && u.role === "instructor" && (
                        <button
                          onClick={() => approveInstructor(u._id)}
                          className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => deactivateUser(u._id)}
                        className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700"
                      >
                        Deactivate
                      </button>
                      <button
                        onClick={() => deleteUser(u._id)}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
