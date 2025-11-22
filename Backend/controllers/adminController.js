import User from "../models/User.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// APPROVE INSTRUCTOR
export const approveInstructor = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role: "instructor", status: "active" },
    { new: true }
  ).select("-password");

  res.json({ message: "Instructor approved", user });
};

// ASSIGN ROLE
export const updateUserRole = async (req, res) => {
  const { role } = req.body;
  
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  ).select("-password");

  res.json({ message: "Role updated", user });
};

// DEACTIVATE USER
export const deactivateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { status: "inactive" },
    { new: true }
  ).select("-password");

  res.json({ message: "User deactivated", user });
};

// DELETE USER
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
