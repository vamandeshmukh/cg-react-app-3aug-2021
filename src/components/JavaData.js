import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const JavaData = (props) => {

    const [emp, setEmp] = useState(
        {
            eid: 0,
            firstName: '',
            salary: 0
        }
    );

    const handleEmpData = (evt) => {
        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
    }

    const submitAddEmp = (evt) => {
        console.log("submitEmpData");

        evt.preventDefault();
    }

    return (
        <div className="App">
            <h1>Java Data Component</h1>
            <p>This is java data component.</p>
            <div>
                <p>Add a new Employee</p>
                <form onSubmit={submitAddEmp} >
                    <div>
                        <input
                            type="number"
                            id="eid"
                            name="eid"
                            value={emp.eid}
                            onChange={handleEmpData}
                        />
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={emp.firstName}
                            onChange={handleEmpData}
                        />
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={emp.salary}
                            onChange={handleEmpData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            value="submit"
                        />
                    </div>
                </form>
            </div>
            <p> {emp.eid} </p>
            <p> {emp.firstName} </p>
            <p> {emp.salary} </p>
        </div>
    );
}
export default JavaData;


