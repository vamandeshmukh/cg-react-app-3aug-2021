import { createSlice } from '@reduxjs/toolkit';

export const empSlice = createSlice({

  name: 'emp',
  initialState: {
    // this object stores one emp data 
    empState: {
      eid: 0,
      firstName: '',
      salary: 0
    },
    // this array stores all emps data 
    allEmpsState: [],

    // previously created properties  
    eid: 0,
    firstName: '',
    salary: 0,
  },
  reducers: {
    // methods to save spring boot data to redux store 
    getEmpById: (state, action) => {
      state.empState = action.payload;
    },
    getAllEmps: (state, action) => {
      state.allEmpsState = action.payload;
    },
    // demo methods 
    payHike: (state, action) => {
      state.empState.salary = action.payload;
    },
    setFirstName: (state, action) => {
      state.empState.firstName = action.payload;
    },
    // previously created method 
    payHike2: (state) => {
      state.salary += 1;
    },
  }
})

export const { getEmpById, getAllEmps, payHike, setFirstName } = empSlice.actions;

export default empSlice.reducer;

