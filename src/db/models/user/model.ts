// lib
import mongoose from "mongoose";

// typedef
import { UserInterface } from "../../../interfaces/user";

export const userSchema = new mongoose.Schema<UserInterface>({
  profileImageUrl: {
    type: String,
    required: false,
  },
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  password: {
    type: String,
    required: true,
  },
});

export type UserModelType = mongoose.Model<typeof userSchema>;
