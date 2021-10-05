import { createSlice } from '@reduxjs/toolkit';

export const empSlice = createSlice({

  name: 'emp',
  initialState: {
    empState: {
      eid: 0,
      firstName: '',
      salary: 0
    },
    // previously created properties  
    eid: 0,
    firstName: '',
    salary: 0,
  },
  reducers: {
    // previously created method 
    payHike2: (state) => {
      console.log(state.salary);
      state.salary += 1;
    },
    payHike: (state, action) => {
      console.log(state.empState.salary);
      state.empState.salary = action.payload
    },
    setFirstName: (state, action) => {
      console.log(state.empState.firstName);
      state.empState.firstName = action.payload
    },
  }
})

export const { payHike, setFirstName } = empSlice.actions;

export default empSlice.reducer;

