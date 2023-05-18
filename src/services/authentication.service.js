// import Fetch from "../helpers/fetch";
import {
  // AUTHENTICATION_LOGIN, LOGIN_URL,
} from "../configs/api";
import axios from "axios";

class AuthenticationService {
  /**
   * Login with phone and password
   */
  static async login(email, password) {
    try {
      const result = await axios.post('https://api-node.themesbrand.website/auth/signin', {
      email: email,
      password: password
    });
      return result;
    } catch (error) {
      throw new Error(error.message)
    }
  }

  
}

export default AuthenticationService;
