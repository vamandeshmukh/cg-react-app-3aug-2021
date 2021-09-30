import React from 'react';
import './App.css';

// Types of components in React 
// 1. function components 
// 2. class components 

// 1. example of function component 
// const Sample = () => {
//     return (
//         <div className="App">
//             <h1>Sample Component</h1>
//             <p>This is a sample component.</p>
//         </div>
//     );
// }
// export default Sample;

// 2.  example of class component 
class Sample extends React.Component {
    constructor() {
        super();
    }

    render = () => {
        return (
            <div className="App">
                <h1>Sample Component</h1>
                <p>This is a sample component.</p>
            </div>
        );
    }
}

export default Sample;
