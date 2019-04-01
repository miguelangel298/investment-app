import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';
import { IAuthenticationState } from 'src/store/states/AuthenticationState';
import reducers from './reducers';

export interface IAppState {
  auth: IAuthenticationState;
}

const persistConfig = {
  storage,
  key: 'villavirtual_app',
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore<IAppState, any, any, any>(persistedReducer, applyMiddleware(reduxThunk));
const persistor = persistStore(store);

const storeConfig = {
  store,
  persistor,
};

export default storeConfig;
