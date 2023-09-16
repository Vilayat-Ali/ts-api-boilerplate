// lib
import mongoose from "mongoose";
import consola from "consola";

import ENV from "../utils/env";
import { MongoModel } from "./models";

export class Mongo {
  private models: MongoModel;

  constructor() {
    this.models = new MongoModel();
  }

  public async connect2DB() {
    try {
      await mongoose.connect(ENV.MONGO_URL);
      consola.success("Connected to DB");
    } catch (err: any) {
      consola.fatal(err);
    }
  }

  public getModels() {
    return this.models;
  }
}
