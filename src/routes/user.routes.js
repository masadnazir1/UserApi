import userController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.get("/details", userController.GetUser);

export default router;
