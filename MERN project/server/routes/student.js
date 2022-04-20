import express from "express";
import {
  getStudents,
  createStudent,
  deleteStudent,
  getUserById,
  editUser,
} from "../controllers/student.js";
import student from "../models/student.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);
export default router;
