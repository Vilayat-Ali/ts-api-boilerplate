// lib
import express from "express";

// importing routes
import { Auth } from "./auth";

export class Api {
  private router: express.Router;

  constructor() {
    this.router = express.Router();

    // mapping routes
    this.router.use("/auth", new Auth().getRouter());
  }

  public getRouter() {
    return this.router;
  }
}
