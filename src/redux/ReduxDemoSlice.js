import { createSlice } from '@reduxjs/toolkit';

export const reduxDemoSlice = createSlice({

    // state.reduxDemo.num2

    name: 'reduxDemo',
    initialState: {
        num2: 101,
        num3: 300, 
        num4: [10, 30, 40],
        num5: {},
        num6: '',
        num7: false
    },
    reducers: {
        changeNum: (state, action) => {
            console.log('changeNum');
            state.num2 += action.payload;
        }
    },
})

export const { changeNum } = reduxDemoSlice.actions;
export default reduxDemoSlice.reducer;
