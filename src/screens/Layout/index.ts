import { connect } from 'react-redux';
import Layout from 'src/screens/Layout/Layout';
import { IAppState } from 'src/store/storeConfig';
import * as AuthActions from 'src/store/actions/AuthenticationActions';
import { bindActionCreators, Dispatch } from 'redux';
import { AuthenticationAction } from 'src/store/action-types/AuthenticationActionTypes';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './styles';

const mapStateToProps = ({ auth: { isAuthenticated, user } }: IAppState) => {
  return {
    isAuthenticated,
    user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AuthenticationAction>) => {
  return bindActionCreators(AuthActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));
