import React, { useState, useEffect } from 'react';


const Child = (props) => {
    const [childEmp, setChildEmp] = useState({}); // child state   
    const [parentEmp, setParentEmp] = useState({}); // from parent  

    useEffect(() => {
        setParentEmp(props.parentEmp);
        setChildEmp({
            firstName: 'Tonu',
            salary: 30.5
        }
        );
        console.log('Child useEffect');
        console.log(props);
        // console.log(props.parentEmp.firstName);
    }, []);

    const onTrigger = () => {
        console.log('Child onTrigger');
        props.parentCallback(childEmp);
    };

    return (
        <div className="container">
            <h1 className="display-4 text-primary">Child Component</h1>
            <p>Data in Child component</p>
            <p> Existing Data in Child: {childEmp.firstName}</p>
            <p> Data from Parent to Child vis props: {parentEmp.firstName} </p>
            <button onClick={onTrigger}>Pass childEmp Data to Parent</button>
            <p></p>
        </div>
    );
}
export default Child;
