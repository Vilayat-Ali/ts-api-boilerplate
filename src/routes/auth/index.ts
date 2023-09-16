// lib
import express from "express";

// middlewares
import { Middleware } from "../../middlewares";

// routes
import { AuthRoutes } from "./routes";

export class Auth {
  private router: express.Router;
  private middleware: Middleware;

  constructor() {
    this.router = express.Router();
    this.middleware = new Middleware();

    // routes
    this.router.post("/register", AuthRoutes.register);
    this.router.post("/login", AuthRoutes.login);
    this.router.post(
      "/invite",
      this.middleware.getAuthMiddleware,
      AuthRoutes.invite
    );
  }

  public getRouter() {
    return this.router;
  }
}
