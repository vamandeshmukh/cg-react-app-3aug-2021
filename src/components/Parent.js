import React, { useEffect, useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [parentEmp, setParentEmp] = useState({}); // parent state  
    const [childEmp, setChildEmp] = useState({}); // from callback 

    useEffect(() => {
        console.log('Parent useEffect');
        setParentEmp({
            name: 'Monu',
            salary: 20.5
        }
        );
    }, []);

    const handleCallback = (childEmpData) => {
        console.log('Parent handleCallback');
        setChildEmp(childEmpData);
    }


    return (
        <div className="container">
            <h1 className="display-4 text-primary">Parent Component</h1>
            <p>Data in Parent component</p>
            <p> Existing Data in Parent {parentEmp.name}</p>
            <p>Data coming from Child to Parent {childEmp.name}</p>
            <Child
                parentCallback={handleCallback}
            ></Child>
        </div>
    );
}
export default Parent;
