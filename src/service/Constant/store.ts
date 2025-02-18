import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// @ts-ignore
import rootSaga from '../sagas/saga.ts';

// @ts-ignore
import rootReducer from "../reducers/rootReducer.ts";
// @ts-ignore
import toastMiddleware from "./toastMiddlewares.ts";

// const EXPIRATION_TIME = 2 * 60 * 60 * 1000;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user'],
  transforms: [],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware, toastMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
