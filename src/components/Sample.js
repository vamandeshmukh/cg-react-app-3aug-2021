import React from 'react';
import '../App.css';

class Sample extends React.Component {

    constructor() {
        super();
    }

    render = () => {
        return (
            <div className="App">
                <h1>Sample Component</h1>
                <p>This is sample component.</p>
                <p> {console.log("JS in JSX")} </p>
                <p>{new Date().toLocaleDateString('en-IN')}</p>
                <p>{new Date().toLocaleDateString('mr-IN')}</p>
            </div>
        );
    }
}

export default Sample;

// Types of components in React 
// 1. function components 
// 2. class components 

// 2.  example of class component 

// 1. example of function component 
// const Sample = () => {
//     return (
//         <div className="App">
//             <h1>Sample Component</h1>
//             <p>This is sample component.</p>
//         </div>
//     );
// }
// export default Sample;

