import { createSlice } from '@reduxjs/toolkit';

export const reduxDemoSlice = createSlice({

    name: 'reduxDemo',
    initialState: {
        num2: 101
    },
    reducers: {
        changeNum: (state) => {
            state.num2 += 10;
        }
    }
})

export const { changeNum } = reduxDemoSlice.actions;
export default reduxDemoSlice.reducer;
