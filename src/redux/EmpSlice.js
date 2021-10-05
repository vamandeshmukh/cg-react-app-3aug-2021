import { createSlice } from '@reduxjs/toolkit';

export const empSlice = createSlice({

  name: 'emp',
  initialState: {
      eid: 0,
      firstName:'',
    salary: 0,
  },
  reducers: {
    payHike: (state) => {
      console.log(state.salary);
      state.salary += 1;
    },
    setFirstName: (state, action) => {
      console.log(state);
      state.firstName = action.payload
    },
    // incrementByAmount(state, action: PayloadAction<number>) {
    //     state.value += action.payload
    //   },
  }
})

export const { payHike, setFirstName } = empSlice.actions;

export default empSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const EmpSlice = createSlice({

//     name: 'emp',
//     initialState: {
//         salary: 0,
//     },

//     // initialState: {
//     //     emp: {
//     //         eid: 0,
//     //         firstName: '',
//     //         salary: 0,
//     //     }
//     // },
//     reducers: {
//         payHike: (state) => {
//             console.log('payHike');
//             // state.emp.salary += 1;
//             state.salary += 1;
//         }
//         // other actions 

//     }
// })

// export const { payHike } = EmpSlice.actions;

// export default EmpSlice.reducer;
