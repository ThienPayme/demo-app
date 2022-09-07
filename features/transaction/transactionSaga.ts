import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, take, takeLatest } from "redux-saga/effects";
import {
  getTransaction,
  editTransaction,
  addTransaction,
  delTransaction
} from "../../apis/transactions";
import { DataTransaction } from '../../interfaces';
import { fetchData, fetchDataSuccess, setError, updateData, createData, deleteData  } from './transactionSlice';
function* fetchDataList() {

  const response: DataTransaction[] = yield call(getTransaction, {});
  yield put(fetchDataSuccess(response));

}
function* updateDataSaga(action: PayloadAction<DataTransaction>) {
 
  try {
    const response: DataTransaction = yield call(editTransaction, action.payload.id, action.payload); 
  } catch (error) {
     
    yield put(setError("Cann't update data"));
  }

}

function* createNewData(action: PayloadAction<DataTransaction>) {
 
  try {
    const response: DataTransaction = yield call(addTransaction, action.payload); 
  } catch (error) {
     
    yield put(setError("Cann't create data"));
  }

}
function* deleteStransacion(action: PayloadAction<string>) {
 
  try {
    const response: DataTransaction = yield call(delTransaction, action.payload); 
  } catch (error) { 
    yield put(setError("Cann't create data"));
  }

}
export default function* transactionSaga() {

  yield takeLatest(fetchData.type, fetchDataList);
  yield takeLatest(updateData.type, updateDataSaga);
  yield takeLatest(createData.type, createNewData);
  yield takeLatest(deleteData.type, deleteStransacion);


}