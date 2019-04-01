import * as React from 'react';
import AppBar from 'src/components/appbar';
import User from 'src/core/entities/User';
import Footer from 'src/components/footer/Footer';

interface ILayoutProps {
  children?:  React.ReactElement<any>[] | React.ReactElement<any>;
  isAuthenticated?: boolean;
  user: User;
  logout(): void;
}

export default class Layout extends React.PureComponent<ILayoutProps> {
  render() {
    const { children, isAuthenticated, user, logout } = this.props;
    return (
      <>
        <AppBar
          title={'Inversiones'}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={logout}
        />
        <div className={'my-5'}>
          {children}
        </div>
        <Footer />
      </>
    );
  }
}
