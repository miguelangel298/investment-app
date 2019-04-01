import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface RequireAuthProps extends RouteComponentProps {
  isAuthenticated: boolean;
}

/**
 * Class for components that require authentication to be usable.
 */
export default class RequireAuthComponent<T extends RequireAuthProps, S>
  extends React.PureComponent<T, S> {
  componentDidMount(): void {
    this.checkForAuthentication();
  }
  componentDidUpdate(): void {
    this.checkForAuthentication();
  }

  checkForAuthentication(): void {
    const { isAuthenticated, history } = this.props;
    if (!isAuthenticated) {
      // redirect to login.
      history.push('/login');
    }
  }
}
