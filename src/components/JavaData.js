import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const JavaData = (props) => {

    const [empList, setEmpList] = useState([]);
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
        axios.post('http://localhost:8082/addEmp', emp)
            .then((response) => {
                console.log(response.data);
                console.log(response.headers);
            }).catch((error) => {
                console.log(error.message);
            });
        evt.preventDefault();
    }

    const getAllEmp = () => {
        axios.get('http://localhost:8082/getAllEmp')
            .then((response) => {
                setEmpList(response.data);
            }).catch(error => {
                console.log(error.message)
            });
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
                <p> {emp.eid} {emp.firstName} {emp.salary} </p>
            </div>
            <div>
                <p>Get All Employees' Data</p>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        value="submit"
                        onClick={getAllEmp}
                    />
                </div>
                <div> {empList.map(e => <p> {e.eid}, {e.firstName} {e.salary} </p>)} </div>
            </div>
        </div>
    );
}
export default JavaData;


