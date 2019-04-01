import AuthenticationService from 'src/core/data/services/AuthenticationService';
import { LoginPayload } from 'src/core/value-objects/LoginPayload';
import { Dispatch } from 'redux';
import { AuthenticationAction, Logout } from 'src/store/action-types/AuthenticationActionTypes';
import {
  AUTHENTICATE_USER_FAILED, AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATING_USER, LOGOUT, SIGNUP_USER, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS,
} from 'src/store/constants/AuthenticationActionConstansts';

export const login = (loginPayload: LoginPayload) =>
  async (dispatch: Dispatch<AuthenticationAction>) => {
    dispatch({
      type: AUTHENTICATING_USER,
    });
    try {
      const session = await AuthenticationService.login(loginPayload);
      dispatch({
        type: AUTHENTICATE_USER_SUCCESS,
        payload: session,
      });
    } catch (e) {
      dispatch({
        type: AUTHENTICATE_USER_FAILED,
        error: 'Credenciales invalidas',
      });
    }
  };

export const signup = (
  fullName: string,
  email: string,
  password: string,
  repeatPassword: string,
) =>
  async (dispatch: Dispatch<AuthenticationAction>) => {
    dispatch({
      type: SIGNUP_USER,
    });
    try {
      const created = await AuthenticationService
        .signup(fullName, email, password, repeatPassword);
      if (created) {
        dispatch({
          type: SIGNUP_USER_SUCCESS,
          payload: created,
        });
      } else {
        dispatch({
          type: SIGNUP_USER_FAIL,
          error: 'No pudimos registrar tu usuario, intenta otra vez',
        });
      }
    } catch (e) {
      dispatch({
        type: SIGNUP_USER_FAIL,
        error: 'Este email ya se encuentra registrado',
      });
    }
  };

export const logout = () =>
  (dispatch: Dispatch<Logout>) => {
    dispatch({
      type: LOGOUT,
    });
  };
