import express from "express";
import { createUser, loginUser, register, login } from "../controllers/user.js";
import validationMiddleware from "../middleware/validation.middleware.js";

const router = express.Router();

router.post("/register", validationMiddleware, createUser);
router.post("/login", loginUser);
router.get("/login", login);
router.get("/register", register);

export default router;
