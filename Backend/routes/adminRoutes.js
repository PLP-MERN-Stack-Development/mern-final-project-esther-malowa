import express from "express";
import { 
  getAllUsers,
  approveInstructor,
  updateUserRole,
  deactivateUser,
  deleteUser
} from "../controllers/adminController.js";

import { adminOnly } from "../middleware/adminAuth.js";
import { protect } from "../middleware/authMiddleware.js"; // your JWT auth middleware

const router = express.Router();

router.get("/users", protect, adminOnly, getAllUsers);
router.put("/approve-instructor/:id", protect, adminOnly, approveInstructor);
router.put("/update-role/:id", protect, adminOnly, updateUserRole);
router.put("/deactivate/:id", protect, adminOnly, deactivateUser);
router.delete("/delete/:id", protect, adminOnly, deleteUser);

export default router;
