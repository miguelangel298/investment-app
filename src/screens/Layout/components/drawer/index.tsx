import * as React from 'react';
import { Drawer as DrawerUI } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { ChevronLeft, ExpandLess, ExpandMore } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';

interface IDrawerProps {
  onClose: () => void;
  isOpen: boolean;
  onClick: () => void;
  classes?: any;
};

export default class Drawer extends React.PureComponent<IDrawerProps, {}> {

  render() {
    const { onClose, isOpen, onClick, classes } = this.props;
    return (
      <ClickAwayListener onClickAway={onClose}>
        <DrawerUI
          variant="persistent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={isOpen}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={onClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <List>
            <ListItem button onClick={onClick}>
              <ListItemIcon>
                <MailIcon/>
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </List>
        </DrawerUI>
      </ClickAwayListener>
    );
  }
}
