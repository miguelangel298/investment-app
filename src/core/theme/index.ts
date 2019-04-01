import { createMuiTheme } from '@material-ui/core/styles';

export const primaryColor = '#1e88e5';
export const secondaryColor = '#d32f2f';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Libre Franklin',
  },
});

export default appTheme;
