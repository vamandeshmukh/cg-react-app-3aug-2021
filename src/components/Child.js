import React, { useState, useEffect } from 'react';

const Child = (props) => {
    const [childData, setChildData] = useState({});

    useEffect(() => {
        setChildData(props.parentData);
    }, []);

    return (
        <div className="container">
            <h1 className="display-4 text-primary">Child Component</h1>
            <p>Data in Child component</p>
        </div>
    );
}
export default Child;
