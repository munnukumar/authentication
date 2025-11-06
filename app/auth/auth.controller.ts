import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { createResponse } from "../common/helper/response.helper";
import  createHttpError  from "http-errors";


export const register = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    const user = await AuthService.register(name, email, password, role);
    if(!user) {
        throw createHttpError(400, "User registration failed");
    }
    res.send(createResponse(user, "User registered successfully"));
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { user, token } = await AuthService.login(email, password);
    res.send(createResponse({ user, token }, "User logged in successfully"));
}
