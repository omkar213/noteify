import express from "express";
import { signup, login } from "../controllers/authController.js";

//middleware
import { validateLogin, validateSignUp } from "../middleware/authValidation.js";

const router = express.Router();

router.post("/login", validateLogin, login);
router.post("/signup", validateSignUp, signup);

export default router;
