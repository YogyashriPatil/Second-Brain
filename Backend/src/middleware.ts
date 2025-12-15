import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_PASSWORD = process.env.jwtpassword;

if (!JWT_PASSWORD) {
  throw new Error("jwtpassword is not defined in environment variables");
}

// ✅ ADD THIS
interface CustomJwtPayload extends JwtPayload {
  id: string;
}

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(403).json({
      message: "Authorization header missing",
    });
  }

  try {
    const decoded = jwt.verify(header, JWT_PASSWORD);

    if (typeof decoded === "string") {
      return res.status(403).json({
        message: "Invalid token",
      });
    }

    const payload = decoded as CustomJwtPayload;

    // ✅ now NO error here
    req.userId = payload.id;
    next();
  } catch {
    return res.status(403).json({
      message: "You are not logged in",
    });
  }
};
