import { Router } from "express";
import { catchError } from "../common/middleware/catch-error.middleware";
import { roleAuth } from "../common/middleware/role-auth.middleware";
import * as userController from "./user.controller";
import { get } from "http";
// import { createUserValidator } from "./user.validator";

const router = Router();
router.
    get("/profile",userController.getAllUsers);
    get("/:id",  userController.getUserById as any);
    get("/update", userController.updateUser as any);
