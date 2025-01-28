import express from "express";
import {
  deleteUser,
  getAllUsers,
  loginUser,
  logoutUser,
  registerUser,
  updateProfile,
  updateUserRole,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.post("/signout", logoutUser);
router.get("/users", getAllUsers);
router.patch("/users/:id", updateUserRole);
router.patch("/edit-profile", updateProfile);
router.delete("/users/:id", deleteUser);

export default router;
