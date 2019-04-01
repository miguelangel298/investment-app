import * as React from 'react';
import './Home.css';
import { RouteComponentProps } from 'react-router';
import User from 'src/core/entities/User';

interface IHomeProps  extends RouteComponentProps {
  loading: boolean;
  isAuthenticated: boolean;
  user: User;
  error?: string;
}

const homeDefaultProps: IHomeProps = {
  loading: false,
  error: undefined,
  isAuthenticated: false,
  user: {} as User,
  history: {} as any,
  match: {} as any,
  location: {} as any,
};

export default class Home extends React.PureComponent<IHomeProps> {
  static defaultProps = homeDefaultProps;

  componentDidUpdate(prevProps: Readonly<IHomeProps>,
                     prevState: Readonly<{}>, snapshot?: any): void {
    if (prevProps.isAuthenticated && !this.props.isAuthenticated) {
      // Logged out
      this.props.history.push('/login');
    }
  }

  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-md-2 border-right'}>
          </div>
          <div className={'col-md-10 col-sm-12 ml-auto'}>
            { isAuthenticated && user && (
              <h5>{`Bienvenido/a, ${user.fullName}!`}</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
}
