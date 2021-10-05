import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeNum } from '../redux/ReduxDemoSlice';

const ReduxDemo = () => {

    // const [num, setNum] = useState(0);
    const num = useSelector((state) => state.reduxDemo.num2);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <p>Redux Demo Component</p>

                <button onClick={dispatch(changeNum())} >Click here</button>
                <p>Output - {num} </p>



            </div>
        </div>
    )
}

export default ReduxDemo;

