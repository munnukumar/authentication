// app/auth/auth.service.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserSchema from "../user/user.schema";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export class AuthService {
  static async register(name: string, email: string, password: string, role: string = "user") {
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    const user = await UserSchema.create({
      name,
      email,
      password,
      role,
    });

    return user;
  }

  static async login(email: string, password: string) {
    const user = await UserSchema.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });

    return { user, token };
  }
}
