import React, { useEffect, useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [parentEmp, setParentEmp] = useState({
        firstName: 'Monu',
        salary: 20.5
    }); // parent state  
    const [childEmp, setChildEmp] = useState({}); // from callback 

    // useEffect(() => {
    //     setParentEmp({
    //         firstName: 'Monu',
    //         salary: 20.5
    //     }
    //     );
    //     console.log('Parent useEffect');
    // }, []);

    const handleCallback = (childEmpData) => {
        console.log('Parent handleCallback');
        setChildEmp(childEmpData);
    }


    return (
        <div className="container">
            <h1 className="display-4 text-primary">Parent Component</h1>
            <p>Data in Parent component</p>
            <p> Existing Data in Parent: {parentEmp.firstName}</p>
            <p>Data from Child to Parent via callback: {childEmp.firstName} </p>
            <Child
                parentEmp={parentEmp}
                parentCallback={handleCallback}
            ></Child>
        </div>
    );
}
export default Parent;
