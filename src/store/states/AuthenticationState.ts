import User from 'src/core/entities/User';

export interface IAuthenticationState {
  user?: User;
  token?: string;
  isAuthenticated: boolean;
  loading: boolean;
  loaded: boolean;
  error?: string;
  isRegistered: boolean;
}

export const authenticationInitialState: IAuthenticationState = {
  isAuthenticated: false,
  loading: false,
  loaded: false,
  isRegistered: false,
};
