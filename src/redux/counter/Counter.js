import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './CounterSlice';

const Counter = () => {
    console.log('2 Counter');
    const count = useSelector((state) => state.counter.value);
    const count2 = useSelector((state) => state.counter2.value);
    console.log('3 count');
    const dispatch = useDispatch();
    console.log('4 dispatch');


    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>Increment</button>
                <div className="display-4">Counter {count}</div>
                <div className="display-4">Counter2 {count2}</div>
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;

