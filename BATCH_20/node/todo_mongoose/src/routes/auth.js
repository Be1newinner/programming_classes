import { Router } from "express";
import {
  loginController,
  resetPasswordController,
  verifyPasswordController,
} from "../controllers/auth.js";

const AuthRouter = Router();

// SERVIES FOR USERS ===================================================
// for login user

AuthRouter.post("/", loginController);
//
// for sending otp of reset password user
AuthRouter.post("/reset-password", resetPasswordController);
//
// for verifying reset password otp
AuthRouter.post("/verify-password", verifyPasswordController);

export default AuthRouter;
