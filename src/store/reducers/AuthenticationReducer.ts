import { AuthenticationAction } from 'src/store/action-types/AuthenticationActionTypes';
import {
  AUTHENTICATE_USER_FAILED,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATING_USER, LOGOUT, SIGNUP_USER, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS,
} from 'src/store/constants/AuthenticationActionConstansts';
import {
  authenticationInitialState,
  IAuthenticationState,
} from 'src/store/states/AuthenticationState';
import { RehydrateAction } from 'redux-persist/es/types';

const authenticationReducer = (state: IAuthenticationState = authenticationInitialState,
                               action: AuthenticationAction | RehydrateAction) => {
  switch (action.type) {
    case AUTHENTICATING_USER:
    case SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: false,
        isRegistered: false,
        loading: true,
        loaded: false,
        error: undefined,
      };
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        loaded: true,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isRegistered: action.payload,
        isAuthenticated: false,
        loading: false,
        error: undefined,
      };
    case AUTHENTICATE_USER_FAILED:
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isRegistered: false,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        ...authenticationInitialState,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
