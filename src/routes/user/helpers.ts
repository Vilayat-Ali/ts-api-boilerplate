// lib
import { MongoModel } from "../../db/models";

// interface
import { UserInterface } from "../../interfaces/user";

class AuthHelpers {
  private static model = new MongoModel();

  public static createUser(doc: UserInterface) {
    return this.model.userModel.create(doc);
  }

  public static getSpecificUser(id: string) {
    return this.model.userModel.findById(id);
  }

  public static getAllUsers(query: any) {
    const page: number = query.page || 1;
    const size: number = query.size || 10;
    const searchText: string = query.search;

    return this.model.userModel.aggregate([
      {
        $match: {},
      },
      {
        $skip: (page - 1) * size,
      },
      {
        $limit: size,
      },
    ]);
  }

  public static updateUser(id: string, update: Partial<UserInterface>) {
    return this.model.userModel.findByIdAndUpdate(id, {
      $set: {
        ...update,
      },
    });
  }

  public static deleteUser(_id: string) {
    return this.model.userModel.findByIdAndDelete(_id);
  }
}
