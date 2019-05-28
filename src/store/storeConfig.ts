import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';
import { IAuthenticationState } from 'src/store/states/AuthenticationState';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export interface IAppState {
  auth: IAuthenticationState;
}

const persistConfig = {
  storage,
  key: 'investment_app',
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore<IAppState, any, any, any>(persistedReducer,
                                                    // tslint:disable-next-line:max-line-length
                                                    composeWithDevTools(applyMiddleware(reduxThunk)));

const persistor = persistStore(store);

const storeConfig = {
  store,
  persistor,
};

export default storeConfig;
