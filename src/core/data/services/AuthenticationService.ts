import { LoginPayload } from '../../value-objects/LoginPayload';
import axios from 'axios';

export default class AuthenticationService {
  static async login(payload: LoginPayload) {
    const { username, password } = payload;
    try {
      const axiosResponse = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username,
        password,
      });
      return axiosResponse.data.session;
    } catch (e) {
      throw e;
    }
  }

  static async signup(
    fullName: string,
    email: string,
    password: string,
    repeatPassword: string,
  ) {
    try {
      const axiosResponse = await axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, {
        fullName,
        email,
        password,
        repeatPassword,
      });
      return axiosResponse.data.result;
    } catch (e) {
      throw e;
    }
  }
}
