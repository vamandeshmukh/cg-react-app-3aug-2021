import React, { useState, useEffect } from 'react';

const Child = (props) => {

    const [childEmp, setChildEmp] = useState({}); // child state   

    useEffect(() => {
        setChildEmp({
            name: 'Tonu',
            salary: 30.5
        }
        );
    }, []);

    const onTrigger = () => {
        
        props.parentCallback(childEmp);
    };

    return (
        <div className="container">
            <h1 className="display-4 text-primary">Child Component</h1>
            <p>Data in Child component</p>
            <p> Existing Data in Child {childEmp.name}</p>
            <button onClick={onTrigger}>Pass childEmp Data to Parent</button>
        </div>
    );
}
export default Child;
