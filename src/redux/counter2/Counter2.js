import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './Counter2Slice';

const Counter2 = () => {
    console.log('2 Counter2');
    const count2 = useSelector((state) => state.counter.value);
    const count = useSelector((state) => state.counter2.value);
    const dispatch = useDispatch();


    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>Increment</button>
                <div className="display-4">Counter2 {count2}</div>
                <div className="display-4">Counter {count}</div>
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter2;

