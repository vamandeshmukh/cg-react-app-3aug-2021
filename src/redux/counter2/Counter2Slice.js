import { createSlice } from '@reduxjs/toolkit';

export const Counter2Slice = createSlice({

  name: 'counter2',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      console.log('1 increment');
      state.value += 1;
    },
    decrement: (state) => {
      console.log('1 decrement');
      state.value -= 1;
    }
  }
})

export const { increment, decrement } = Counter2Slice.actions;

export default Counter2Slice.reducer;
