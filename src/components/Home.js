import React from 'react';
import Parent from './Parent';
import LoginControl from './LoginControl';
import BsStuff from './BsStuff';
import  Counter from '../redux/counter/Counter';
import Emp from './Emp';
import Counter2 from '../redux/counter2/Counter2';
import ReduxDemo from './ReduxDemo';

const Home = () => {
    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Home Component</h1>
            <p>Welcome to this app!</p>
            {/* <Parent /> */}
            {/* <LoginControl /> */}
            {/* <BsStuff /> */}
            <Counter />
            <p> </p>
            <Counter2 />
            {/* <Emp /> */}
            <ReduxDemo />
        </div>
    );
}

export default Home;

