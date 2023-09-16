// lib
import express from "express";

// interfaces
import { AuthenticatedRequest } from "../../interfaces/request";

export class AuthRoutes {
  public static async register(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
    } catch (err: any) {}
  }

  public static async login(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
    } catch (err: any) {}
  }

  public static async invite(
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
    } catch (err: any) {}
  }
}
