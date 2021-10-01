import React from 'react';
import Parent from './Parent';

const Home = () => {
    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Home Component</h1>
            <p>Welcome to this app!</p>
            <Parent />

        </div>
    );
}

export default Home;

