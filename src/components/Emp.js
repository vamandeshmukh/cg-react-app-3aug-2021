import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { payHike, setFirstName } from '../redux/EmpSlice';

const Emp = () => {

    const dispatch = useDispatch();
    const empp = useSelector((state) => state.emp.salary);
    const empp2 = useSelector((state) => state.emp.eid);
    const empp3 = useSelector((state) => state.emp.firstName);
    const [enteredName, setEnteredName] = useState('');

    const someMethod = (evt) => {
        setEnteredName(evt.target.value);

    }

    // const [empList, setEmpList] = useState([]);
    // const [oneEmp, setOneEmp] = useState({
    //     eid: 0,
    //     firstName: '',
    //     salary: 0
    // });

    // useEffect(() => {
    //     setEmp(
    //         {
    //             eid: 0,
    //             firstName: '',
    //             salary: 0
    //         }
    //     );
    //     setOneEmp({
    //         eid: 0,
    //         firstName: '',
    //         salary: 0
    //     });
    // }, []);

    // const handleOneEmpData = (evt) => {
    //     console.log("handleOneEmpData");
    //     setOneEmp({
    //         ...emp,
    //         [evt.target.name]: evt.target.value
    //     });
    // }

    // const submitGetEmpById = (evt) => {
    //     console.log("submitGetEmpById");
    //     axios.get(`http://localhost:8082/getEmp/${oneEmp.eid}`)
    //         .then((response) => {
    //             setOneEmp(response.data);
    //         }).catch(error => {
    //             console.log(error.message)
    //         });
    //     evt.preventDefault();
    // }
    // const submitGetAllEmp = (evt) => {
    //     console.log('submitGetAllEmp');
    //     axios.get('http://localhost:8082/getAllEmp')
    //         .then((response) => {
    //             setEmpList(response.data);
    //         }).catch(error => {
    //             console.log(error.message)
    //         });
    //     evt.preventDefault();
    // }

    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Emp Component</h1>
            <p>This is Emp component.</p>
            <div>
                <button className="btn btn-primary" onClick={() => dispatch(payHike())}>Pay Hike</button>
                <div className="display-4">Salary {empp}</div>
            </div>
            <div>
                <input type="text" id="enteredName" name="enteredName" value={enteredName} onChange={someMethod} />
                <button className="btn btn-primary" onClick={() => dispatch(setFirstName(enteredName))}>Set Name</button>
                <div className="display-4">firstName {empp3}</div>
            </div>
            <div>

            </div>

            {/* <div>
                <p>Get Employee by Eid</p>
                <form className="form form-group row border border-primary pt-3 pb-3 px-3 py-3" onSubmit={submitGetEmpById} >
                    <div>
                        <input
                            type="number"
                            id="eid"
                            name="eid"
                            className="form-control mb-3"
                            value={oneEmp.eid}
                            placeholder="Employee Id"
                            onChange={handleOneEmpData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Get Employee"
                        />
                    </div>
                </form>
                <p> {oneEmp.eid} {oneEmp.firstName} {oneEmp.salary} </p>
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
                        return (
                            <div k={k}>
                                {e.eid}  {e.firstName} {e.salary}
                            </div>
                        )
                    })}
                </div>
            </div> */}
        </div>
    );
}
export default Emp;


