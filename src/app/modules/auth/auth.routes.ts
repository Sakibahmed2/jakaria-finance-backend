import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/create-user", AuthController.createUser);

router.post("/login", AuthController.loginUser);

export const authRouter = router;
