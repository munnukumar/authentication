import { type BaseSchema } from "../common/dto/base.dto";

export interface IUser extends BaseSchema {
    name: string;
    email: string;
    password: string;
    role: "ADMIN" | "FREELANCER" | "CLIENT";
    isBlocked: boolean;
    image?: string;
    isEmailVerified: boolean;
    resetPasswordToken?: string;
    resetPasswordExpires?: string;
    refreshToken?: string;
}