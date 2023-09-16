// lib
import type { Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

import ENV from "../utils/env";

// interfaces
import { AuthenticatedRequest } from "../interfaces/request";
import { UserJWTPayloadInterface } from "../interfaces/user";

export const AuthMiddlewareHandler = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    res.status(403).json({ success: false, message: "Auth token not passed!" });
  }

  const token: string = req.headers.authorization?.split(" ")[1] as string;

  const data: UserJWTPayloadInterface = verify(
    token,
    ENV.ACCESS_TOKEN
  ) as UserJWTPayloadInterface;

  req.user = data;

  next();
};
