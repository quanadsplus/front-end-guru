import Fetch from "../helpers/fetch";
import {
  AUTHENTICATION_LOGIN,
} from "../configs/api";

class AuthenticationService {
  /**
   * Login with phone and password
   */
  static async login(phone, password) {
    let response = await Fetch.post(AUTHENTICATION_LOGIN, {
      phoneNumber: phone,
      password: password,
    });

    return response;
  }

  
}

export default AuthenticationService;
