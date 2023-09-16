// lib
import { z } from "zod";

export const UserZodSchema = z.object({
  profileImageUrl: z.string().url(),

  name: z.object({
    first: z.string().nonempty(),
    last: z.string().nonempty(),
  }),

  email: z.string().email(),

  password: z
    .string()
    .nonempty()
    .min(8, "Password should be atleast 8 characters long"),
});

export type UserInterface = z.infer<typeof UserZodSchema>;

const userJWTPayloadSchema = z.object({
  _id: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .nonempty(),

  email: z.string().email().nonempty(),
});

export type UserJWTPayloadInterface = z.infer<typeof userJWTPayloadSchema>;
