import React from 'react';
import Parent from './Parent';
import LoginControl from './LoginControl';
import BsStuff from './BsStuff';

const Home = () => {
    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Home Component</h1>
            <p>Welcome to this app!</p>
            {/* <Parent /> */}
            {/* <LoginControl /> */}
            <BsStuff />
        </div>
    );
}

export default Home;

