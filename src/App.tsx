import * as React from 'react';
import storeConfig from 'src/store/storeConfig';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppTheme from 'src/core/theme';

// Screens
import Layout from 'src/screens/Layout';
import Home from 'src/screens/Home';
import Login from 'src/screens/Login/Login';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={AppTheme} >
      <Provider store={storeConfig.store}>
        <PersistGate persistor={storeConfig.persistor} loading={null}>
          <Router>
            <Switch>
              <Layout>
                <Route path={'/'} component={Home} exact />
                <Route path={'/login'} component={Login} exact />
              </Layout>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
      </MuiThemeProvider>
    );
  }
}
