import express from "express";
import { createNote, getNotes } from "../controllers/noteController.js";

import isAuthnticated from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/createNote", isAuthnticated, createNote);
router.get("/getNotes", isAuthnticated, getNotes);

export default router;
