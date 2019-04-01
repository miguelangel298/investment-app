import { Button, TextField, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LoginPayload } from 'src/core/value-objects/LoginPayload';

interface ILoginProps {
  isAuthenticated: boolean;
  error: string;
  login(loginPayload: LoginPayload): void;
}

interface ILoginState {
  username: string;
  password: string;
  error: string;
}

const defaultProps: ILoginProps = {
  isAuthenticated: false,
  error: '',
  login: () => {},
};

interface ILoginComponentProps extends ILoginProps, RouteComponentProps<any> {}

const loginState: ILoginState = {
  username: '',
  password: '',
  error: '',
};

export default class Login extends React.PureComponent<ILoginComponentProps, ILoginState> {
  static defaultProps = defaultProps;
  state = loginState;

  componentDidMount(): void {
    this.checkForAuthentication();
  }

  componentDidUpdate(): void {
    this.checkForAuthentication();
  }

  componentWillReceiveProps(nextProps: Readonly<ILoginComponentProps>, nextContext: any): void {
    const { error } = nextProps;
    if (error) {
      this.setState({ error });
    }
  }

  checkForAuthentication = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      // redirect to home.
      this.props.history.push('/');
    }
  }

  handleLogin = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({
        error: 'Correo/contraseña invalido',
      });
      return;
    }
    const { login } = this.props;
    login({ email: username, password });
  }

  handleUsernameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      error: '',
    });
    const { value } = ev.currentTarget;
    this.setState({
      username: value,
    });
  }

  handlePasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      error: '',
    });
    const { value } = ev.currentTarget;
    this.setState({
      password: value,
    });
  }

  render() {
    const { username, password, error } = this.state;
    return (
      <>
        <div className={'container'}>
          <div className={'row mt-5'}>
            <div className={'col-md-4 mx-auto my-auto'}>
              <Typography variant={'h5'} className={'text-center mb-5'}>Iniciar sesión</Typography>
              <form onSubmit={this.handleLogin}>
                <TextField
                  label={'Usuario'}
                  type={'text'}
                  onChange={this.handleUsernameChange}
                  required={true}
                  placeholder={'Escribe tu nombre de usuario'}
                  fullWidth={true}
                  value={username}
                  margin={'normal'}
                />
                <TextField
                  label={'Contraseña'}
                  required={true}
                  placeholder={'Escribe tu contraseña'}
                  error={error.length > 0}
                  onChange={this.handlePasswordChange}
                  type={'password'}
                  value={password}
                  helperText={error}
                  fullWidth={true}
                  margin={'normal'}
                />
                <Button
                  className={'my-3'}
                  variant={'contained'}
                  type={'submit'}
                  color={'primary'}
                  fullWidth={true}>
                  <AccountCircle className={'mr-2'} />
                  {'Iniciar sesión'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
