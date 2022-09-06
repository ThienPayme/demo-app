import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DataTransaction } from '../../interfaces';


interface State {
  data: DataTransaction[];
  loading: boolean;
  error: null | string;
}

// Define the initial state using that type
const initialState: State = {
  data: [],
  loading: false,
  error: null
};

export const transactionSlice = createSlice({
  name: 'transaction',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<DataTransaction[]>) => {
      state.data = action.payload;
    },
    updateData: (state, action: PayloadAction<DataTransaction>) => {
      state.data = state.data.map(item => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
    },
    deleteData: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(item => {
        return item.id !== action.payload;
      });
    },
    createData: (state, action: PayloadAction<DataTransaction>)=>{
      state.data.unshift(action.payload)
    }
  }
});


export const { fetchData, updateData, deleteData, createData } = transactionSlice.actions;
export default transactionSlice.reducer;