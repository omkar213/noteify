import express from "express";
import {
  createNote,
  deleteNote,
  getNotes,
} from "../controllers/noteController.js";

import isAuthnticated from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/createNote", isAuthnticated, createNote);
router.get("/getNotes", isAuthnticated, getNotes);
router.delete("/delete/:id", isAuthnticated, deleteNote);

export default router;
