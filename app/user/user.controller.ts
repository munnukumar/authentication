import {type Request, type Response} from "express";
import createHttpError from "http-errors";
import asyncHandler from "express-async-handler";
import { createResponse } from "../common/helper/response.helper";
import * as userService from "./user.service";

export const getUserById = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = req.params.id;
        const user = await userService.fetchUserById(userId);
        if (!user) {
            throw createHttpError(404, "User not found");
        }
        res.send(createResponse(user, "User fetched successfully"));
    }
);

export const getAllUsers = asyncHandler(
    async (req: Request, res: Response) => {
        const users = await userService.fetchAllUsers();
        res.send(createResponse(users, "Users fetched successfully"));
    }
);

export const updateUser = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = await userService.updateUser(userId, updateData);
        if (!updatedUser) {
            throw createHttpError(404, "User not found");
        }
        res.send(createResponse(updatedUser, "User updated successfully"));
    }
);