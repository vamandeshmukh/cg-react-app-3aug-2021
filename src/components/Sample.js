import React from 'react';
import '../App.css';

const Sample = (props) => {

    // 


    return (
        <div className="App">
            <h1>Sample Component</h1>
            <p>This is sample component.</p>
            <p> {props.firstName} </p>
            <p> {props.salary} </p>
        </div>
    );
}
export default Sample;


// 2.  example of class component 
// class Sample extends React.Component {

//     constructor(props) {
//         super();
//         this.props = props;
//         this.state = {
//             firstName: "Monu",
//             salary: 10000,
//             phones : {
//                 officePhone: 23456789,
//                 mobile: 9876543210
//             }
//         };
//     }

//     render = () => {
//         return (
//             <div className="App">
//                 <h1>Sample Component</h1>
//                 <p>This is sample component.</p>
//                 <p>{this.props.firstName} </p>
//                 <p>{this.props.salary} </p>
//                 <p>{this.state.firstName} </p>
//                 <p>{this.state.phones.mobile} </p>

//                 <p>{new Date().toLocaleDateString('en-IN')}</p>
//                 <p>{new Date().toLocaleDateString('mr-IN')}</p>
//             </div>
//         );
//     }
// }

// export default Sample;

// Types of components in React 
// 1. function components 
// 2. class components 


// 1. example of function component 

