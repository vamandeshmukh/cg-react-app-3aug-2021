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
                setEmp(response.data);
            }).catch(error => {
                console.log(error.message)
            });
        evt.preventDefault();
    }

    const submitGetAllEmp = (evt) => {
        axios.get('http://localhost:8082/getAllEmp')
            .then((response) => {
                setEmpList(response.data);
            }).catch(error => {
                console.log(error.message)
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Java Data Component</h1>
            <p>This is java data component.</p>
            <div>
                <p>Add a new Employee</p>
                <form className="form form-group row" onSubmit={submitAddEmp} >
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control mb-3"
                            value={emp.firstName}
                            placeholder="First Name"
                            onChange={handleEmpData}
                        />
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            className="form-control mb-3"
                            placeholder="Salary"
                            onChange={handleEmpData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add Employee"
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
                        className="btn btn-primary mb-3"
                        value="Get All Emps"
                        onClick={submitGetAllEmp}
                    />
                </div>
                <div className="Container text-left">
                    <div>
                        <p>EID FIRST NAME SALARY</p>
                    </div>
                    {empList.map((e, k) => {
                        console.log(e);
                        return (
                            <div k={k}>
                                {e.eid}  {e.firstName} {e.salary}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default JavaData;


