// lib
import { Model, model } from "mongoose";

// importing models
import { userSchema, type UserModelType } from "./user/model";

export class MongoModel {
  public userModel: Model<any>;

  constructor() {
    this.userModel = model("user", userSchema);
  }
}
