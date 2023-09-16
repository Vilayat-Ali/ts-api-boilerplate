// lib
import type { Request } from "express";

// interfaces
import type { UserJWTPayloadInterface } from "./user";

export interface AuthenticatedRequest extends Request {
  user: UserJWTPayloadInterface;
}
