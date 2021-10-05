import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeNum } from '../redux/ReduxDemoSlice';

const ReduxDemo = () => {

    console.log('ReduxDemo');

    // const [num3, setNum3] = useState(0); // state - state object of this component 

    const num = useSelector((state) => state.reduxDemo.num2); // state - state object of the whole applicaiton 
    // const num = useSelector((state) => { return state.reduxDemo.num2 }); // 1 
    const num03 = useSelector((state) => state.reduxDemo.num3);
    
    const dispatch = useDispatch();

    return (
        <div>
            <p>Redux Demo Component</p>
            <button onClick={() => { dispatch(changeNum()) }} >Click here</button>
            <p>Output - {num} </p>
            <p>Output3 - {num03} </p>
        </div>
    )
}

export default ReduxDemo;

