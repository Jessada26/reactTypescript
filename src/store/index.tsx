import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [], //? persisted data จดจำค่าใน store ไว้เวลา reload
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState:any = {};
const enhancers:any = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    composedEnhancers
  );
  let persistor = persistStore(store);
  return { store, persistor };
};