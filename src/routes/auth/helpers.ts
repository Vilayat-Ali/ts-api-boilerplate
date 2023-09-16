// lib
import { sign } from "jsonwebtoken";

import ENV from "../../utils/env";

class AuthHelpers {
  private static async generateJWTToken<T>(payload: T) {
    return sign(payload as Object | string | Buffer, ENV.ACCESS_TOKEN, {
      expiresIn: `${ENV.EXPIRATIONAT}d`,
    });
  }
}
