import { validationResult } from "express-validator";
import expressAsyncHandler from "express-async-handler";
import createHttpError from "http-errors";
import { Request, Response, NextFunction } from "express";

export const catchError = expressAsyncHandler(
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    const isError = errors.isEmpty();

    if (!isError) {
      const data = { errors: errors.array() };
      throw createHttpError(400, {
        message: "Validation error!",
        data,
      });
    } else {
      next();
    }
  }
);
