import { IAppState } from 'src/store/storeConfig';
import Home from './component/Home';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

export function mapStateToProps(
  {
    auth: { isAuthenticated, user },
  }: IAppState) {
  return {
    isAuthenticated,
    user,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {

  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
