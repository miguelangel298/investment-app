import { Hidden, Menu, MenuItem } from '@material-ui/core';
import * as React from 'react';
import MatAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import User from 'src/core/entities/User';

interface AppBarProps {
  title: string;
  isAuthenticated?: boolean;
  user: User;
  onLogout(): void;
}

interface AppBarState {
  anchorEl: any;
}

export default class AppBar extends React.PureComponent<AppBarProps, AppBarState> {
  state: AppBarState = {
    anchorEl: null,
  };

  handleClick = (event: React.MouseEvent) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleLogout = () => {
    this.props.onLogout();
    this.handleClose();
  }

  renderSubMenu = () => {
    const { anchorEl } = this.state;
    const { isAuthenticated, user } = this.props;
    return isAuthenticated ? (
      <>
        { user && user.isAdmin && (
          <Link to={'/admin/offers/new'}>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              className={'text-white'}
              color="default">
              <SettingsIcon className={'mr-2'} />
              <Hidden smDown>{'Administrar'}</Hidden>
            </Button>
          </Link>
        )}
       <Button
         aria-owns={anchorEl ? 'simple-menu' : undefined}
         aria-haspopup="true"
         onClick={this.handleClick}
         color="inherit">
          <PersonIcon className={'mr-2'} />
          <Hidden smDown>{'Mi cuenta'}</Hidden>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem>
            <PersonIcon className={'mr-2'} />
            {user.fullName}
          </MenuItem>
          <MenuItem onClick={this.handleLogout}>Cerrar sesion</MenuItem>
        </Menu>
      </>
      ) : (
      <>
        <Link to={'/login'} className={'text-white'}>
          <Button color="inherit">
            <PersonIcon className={'mr-2'} />
            <Hidden smDown>{'Iniciar sesión'}</Hidden>
          </Button>
        </Link>
      </>
    );
  }

  render() {
    const { title } = this.props;
    return (
      <MatAppBar position={'static'}>
        <Toolbar className={'container-fluid'}>
          <Typography variant={'h6'} color={'inherit'}>
            <Link to={'/'} className={'text-white'}>
              {title}
            </Link>
          </Typography>
          <div className={'ml-auto'}>
            {this.renderSubMenu()}
          </div>
        </Toolbar>
      </MatAppBar>
    );
  }
}
