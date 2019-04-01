import { connect } from 'react-redux';
import Layout from 'src/screens/Layout/Layout';
import { IAppState } from 'src/store/storeConfig';
import * as AuthActions from 'src/store/actions/AuthenticationActions';
import { bindActionCreators, Dispatch } from 'redux';
import { AuthenticationAction } from 'src/store/action-types/AuthenticationActionTypes';

const mapStateToProps = ({ auth: { isAuthenticated, user } }: IAppState) => {
  return {
    isAuthenticated,
    user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AuthenticationAction>) => {
  return bindActionCreators(AuthActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
