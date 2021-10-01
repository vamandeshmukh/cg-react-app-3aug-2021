import React, { useEffect, useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [parentData, setParentData] = useState({});

    useEffect(() => {
        setParentData({
            firstName: "Monu",
            salary: 10000,
        });
    }, []);

    return (
        <div className="container">
            <h1 className="display-4 text-primary">Parent Component</h1>
            <p>Data in Parent component</p>
            <p> {parentData.firstName} </p>
            <Child />
        </div>
    );
}
export default Parent;
