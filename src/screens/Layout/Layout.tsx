import * as React from 'react';
import AppBar from 'src/components/appbar';
import User from 'src/core/entities/User';
import Footer from 'src/components/footer/Footer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'src/screens/Layout/components/drawer';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import Drawer from '@material-ui/core/Drawer';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import List from '@material-ui/core/List';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import { ExpandLess, ExpandMore } from '@material-ui/icons';

interface ILayoutProps {
  children?:  React.ReactElement<any>[] | React.ReactElement<any>;
  isAuthenticated?: boolean;
  user: User;
  classes?: any;
  logout(): void;
}

interface ILayoutState {
  open: boolean;
  drawerIsOpen: boolean;

}

export default class Layout extends React.PureComponent<ILayoutProps, ILayoutState> {
  state: ILayoutState = {
    open: false,
    drawerIsOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true });
  }

  handleDrawerClose = () => {
    console.log('estamo aqui');
    this.setState({ drawerIsOpen: false });
  }

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { children, isAuthenticated, user, logout, classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          title={'Inversiones'}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={logout}
        >
          <IconButton className={classes.menuButton} onClick={this.handleDrawerOpen}
                      color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </AppBar>
        <Drawer onClose={this.handleDrawerClose} isOpen={} onClick={}/>
        {/*<ClickAwayListener onClickAway={this.handleDrawerClose}>*/}
          {/*<Drawer*/}
            {/*variant="persistent"*/}
            {/*classes={{*/}
              {/*paper: classes.drawerPaper,*/}
            {/*}}*/}
            {/*open={this.state.drawerIsOpen}*/}
          {/*>*/}
            {/*<div className={classes.drawerHeader}>*/}
              {/*<IconButton onClick={this.handleDrawerClose}>*/}
                {/*<ChevronLeft />*/}
              {/*</IconButton>*/}
            {/*</div>*/}
            {/*<List>*/}
              {/*<ListItem button onClick={this.handleClick}>*/}
                {/*<ListItemIcon>*/}
                  {/*<MailIcon/>*/}
                {/*</ListItemIcon>*/}
                {/*<ListItemText primary="Inbox" />*/}
                {/*{open ? <ExpandLess /> : <ExpandMore />}*/}
              {/*</ListItem>*/}
            {/*</List>*/}
          {/*</Drawer>*/}
        {/*</ClickAwayListener>*/}
        <div className={'my-5'}>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
