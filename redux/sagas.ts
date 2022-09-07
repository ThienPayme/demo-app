import { all } from 'redux-saga/effects';

import transactionSaga from '../features/transaction/transactionSaga'

export default function* rootSaga() {
    console.log('root saga')
    yield all([transactionSaga()]);
  }
  
