import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const JavaData = (props) => {

    const [emp, setEmp] = useState(
        {
            firstName: "Monu",
            salary: 10000,
            phones: {
                officePhone: 23456789,
                mobile: 9876543210
            }
        }
    );

    const handleEmpData = (evt) => {
        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
    }

    const submitEmpData = (evt) => {
        console.log("submitEmpData");
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
        evt.preventDefault();
    }

    return (
        <div className="App">
            <h1>Sample Component</h1>
            <p>This is sample component.</p>
            <div>
                <form onSubmit={submitEmpData} >
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={emp.firstName}
                        onChange={handleEmpData}
                    />
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        value="submit"
                    />
                </form>
            </div>
            <p> {emp.firstName} </p>
            <p> {emp.phones.mobile} </p>
            <p> {props.firstName} </p>
            <p> {props.salary} </p>
        </div>
    );
}
export default JavaData;


