// lib
import type { Response, NextFunction } from "express";

// middlewares
import { AuthenticatedRequest } from "../interfaces/request";
import { AuthMiddlewareHandler } from "./AuthMiddleware";

export type AuthMiddleWareType = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => Promise<void>;

export class Middleware {
  private AuthMiddleware: (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => Promise<void>;

  constructor() {
    this.AuthMiddleware = AuthMiddlewareHandler;
  }

  public getAuthMiddleware() {
    return this.AuthMiddleware;
  }
}
