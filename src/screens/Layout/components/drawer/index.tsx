import * as React from 'react';
import { Drawer as DrawerUI } from '@material-ui/core';

export default class Drawer extends React.PureComponent<{}, {}> {

  render() {
    // const classes = useStyles();
    // const theme = useTheme();
    // const [open, setOpen] = React.useState(false);
    //
    // function handleDrawerOpen() {
    //   setOpen(true);
    // }
    //
    // function handleDrawerClose() {
    //   setOpen(false);
    // }
    return (
      <DrawerUI
        // open={true}
        variant="permanent"

      >

      </DrawerUI>
    );
  }
}
