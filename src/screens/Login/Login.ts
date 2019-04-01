import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Login from 'src/screens/Login/component/Login';
import { AuthenticationAction } from 'src/store/action-types/AuthenticationActionTypes';
import * as Actions from 'src/store/actions/AuthenticationActions';
import { IAppState } from 'src/store/storeConfig';

const mapStateToProps = ({ auth }: IAppState) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    error: auth.error,
    loading: auth.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AuthenticationAction>) => {
  const actionCreators = {
    login: Actions.login,
  };
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
