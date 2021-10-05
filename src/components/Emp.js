import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { payHike, setFirstName } from '../redux/EmpSlice';

const Emp = () => {

    const dispatch = useDispatch();
    const empData = useSelector((state) => state.emp.empState);
    const [empData2, setEmpData2] = useState({
        eid: 0,
        firstName: '',
        salary: 0
    });

    const handleEmpChange = (evt) => {
        setEmpData2({
            ...empData2,
            [evt.target.name]: evt.target.value
        });
    }


    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Emp Component</h1>
            <p>This is Emp component.</p>
            <div>
                <input type="number" id="salary" name="salary" value={empData2.salary} onChange={handleEmpChange} />
                <button className="btn btn-primary" onClick={() => dispatch(payHike(empData2.salary))}>Pay Hike</button>
                <div className="display-4">Salary: {empData.salary}</div>
            </div>
            <div>
                <input type="text" id="firstName" name="firstName" value={empData2.firstName} onChange={handleEmpChange} />
                <button className="btn btn-primary" onClick={() => dispatch(setFirstName(empData2.firstName))}>Set Name</button>
                <div className="display-4">First Name: {empData.firstName}</div>
            </div>
            <div>

            </div>
        </div>
    );
}
export default Emp;


