import {
  AUTHENTICATE_USER_FAILED,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATING_USER, LOGOUT, SIGNUP_USER, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS,
} from 'src/store/constants/AuthenticationActionConstansts';
import Session from 'src/core/value-objects/Session';

export interface AuthenticatingUserAction {
  type: AUTHENTICATING_USER;
}

export interface AuthenticateUserSuccess {
  type: AUTHENTICATE_USER_SUCCESS;
  payload: Session;
}

export interface AuthenticateUserFailed {
  type: AUTHENTICATE_USER_FAILED;
  error?: string;
}

export interface Logout {
  type: LOGOUT;
}

export interface SignupUser {
  type: SIGNUP_USER;
}

export interface SignupUserSuccess {
  type: SIGNUP_USER_SUCCESS;
  payload: boolean;
}

export interface SignupUserFail {
  type: SIGNUP_USER_FAIL;
  error: string;
}

export type SignupUserAction =
  | SignupUser
  | SignupUserSuccess
  | SignupUserFail;

export type AuthenticationAction =
  | AuthenticatingUserAction
  | AuthenticateUserSuccess
  | AuthenticateUserFailed
  | Logout
  | SignupUserAction;
