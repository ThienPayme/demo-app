import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import reducer from './rootReducer'
import logger from 'redux-logger'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(sagaMiddleware).concat(logger)
})

sagaMiddleware.run(rootSaga)
 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch