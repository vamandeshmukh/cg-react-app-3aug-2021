import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmpById, getAllEmps, payHike, setFirstName } from '../redux/EmpSlice';

const Emp = () => {

    // redux variables 
    const dispatch = useDispatch();
    const empData = useSelector((state) => state.emp.empState);
    const allEmps = useSelector((state) => state.emp.allEmpsState);
    // temp storage variables 
    // conditional rendering with displayOneEmp and setDisplayOneEmp
    const [displayOneEmp, setDisplayOneEmp] = useState('Enter eid to view the employee details.');
    const [oneEmp, setOneEmp] = useState({});

    const [empData2, setEmpData2] = useState({
        eid: 0,
        firstName: '',
        salary: 0
    });

    const handleOneEmpData = (evt) => {
        setOneEmp({
            ...oneEmp,
            [evt.target.name]: evt.target.value
        });
    }

    // conditional rendering with displayOneEmp and setDisplayOneEmp
    const submitGetEmpById = (evt) => {
        console.log("submitGetEmpById");
        axios.get(`http://localhost:8082/getEmp/${oneEmp.eid}`)
            .then(async (response) => {
                await dispatch(getEmpById(response.data));
                await setDisplayOneEmp(`${empData.eid} ${empData.firstName} ${empData.salary}`);
            }).catch(async (error) => {
                await setDisplayOneEmp(`Employee with the id ${oneEmp.eid} not found.`);
            });
        evt.preventDefault();
    }

    const submitGetAllEmp = (evt) => {
        console.log("submitGetAllEmp");
        axios.get('http://localhost:8082/getAllEmp')
            .then((response) => {
                dispatch(getAllEmps(response.data));
            }).catch(error => {
                console.log(error.message)
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Emp Component</h1>
            <p>This is Emp component.</p>

            <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3">
                <p>Get Employee by Eid</p>
                <form className="form form-group row pt-3 pb-3 px-3 py-3">
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
                        onClick={submitGetEmpById}
                    />
                </form>
                {/* conditional rendering with displayOneEmp and setDisplayOneEmp */}
                <p>{displayOneEmp}</p>
            </div>

            <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3">
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
                    {allEmps.map((e, k) => {
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
export default Emp;

// import axios from 'axios';
// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getEmpById, getAllEmps, payHike, setFirstName } from '../redux/EmpSlice';

// const Emp = () => {

//     // redux variables 
//     const dispatch = useDispatch();
//     const empData = useSelector((state) => state.emp.empState);
//     const allEmps = useSelector((state) => state.emp.allEmpsState);
//     // temp storage variables 
//     const [oneEmp, setOneEmp] = useState({});
//     const [empData2, setEmpData2] = useState({
//         eid: 0,
//         firstName: '',
//         salary: 0
//     });

//     const handleEmpChange = (evt) => {
//         setEmpData2({
//             ...empData2,
//             [evt.target.name]: evt.target.value
//         });
//     }

//     const handleOneEmpData = (evt) => {
//         setOneEmp({
//             ...oneEmp,
//             [evt.target.name]: evt.target.value
//         });
//     }

//     const submitGetEmpById = (evt) => {
//         console.log("submitGetEmpById");
//         axios.get(`http://localhost:8082/getEmp/${oneEmp.eid}`)
//             .then((response) => {
//                 dispatch(getEmpById(response.data));
//             }).catch(error => {
//                 console.log(error.message)
//             });
//         evt.preventDefault();
//     }

//     const submitGetAllEmp = (evt) => {
//         console.log("submitGetAllEmp");
//         axios.get('http://localhost:8082/getAllEmp')
//             .then((response) => {
//                 dispatch(getAllEmps(response.data));
//             }).catch(error => {
//                 console.log(error.message)
//             });
//         evt.preventDefault();
//     }

//     return (
//         <div className="container" >
//             <h1 className="display-4 text-primary">Emp Component</h1>
//             <p>This is Emp component.</p>
//             <div>
//                 <input type="number" id="salary" name="salary" value={empData2.salary} onChange={handleEmpChange} />
//                 <button className="btn btn-primary" onClick={() => dispatch(payHike(empData2.salary))}>Pay Hike</button>
//                 <div className="display-4">Salary: {empData.salary}</div>
//             </div>
//             <div>
//                 <input type="text" id="firstName" name="firstName" value={empData2.firstName} onChange={handleEmpChange} />
//                 <button className="btn btn-primary" onClick={() => dispatch(setFirstName(empData2.firstName))}>Set Name</button>
//                 <div className="display-4">First Name: {empData.firstName}</div>
//             </div>
//             <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3">
//                 <p>Get Employee by Eid</p>
//                 <form className="form form-group row pt-3 pb-3 px-3 py-3">
//                     <input
//                         type="number"
//                         id="eid"
//                         name="eid"
//                         className="form-control mb-3"
//                         value={oneEmp.eid}
//                         placeholder="Employee Id"
//                         onChange={handleOneEmpData}
//                     />
//                     <input
//                         type="submit"
//                         id="submit"
//                         name="submit"
//                         className="btn btn-primary mb-3"
//                         value="Get Employee"
//                         onClick={submitGetEmpById}
//                     />
//                 </form>
//                 <p> {empData.eid} {empData.firstName} {empData.salary} </p>
//             </div>

//             <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3">
//                 <p>Get All Employees' Data</p>
//                 <div>
//                     <input
//                         type="submit"
//                         id="submit"
//                         name="submit"
//                         className="btn btn-primary mb-3"
//                         value="Get All Emps"
//                         onClick={submitGetAllEmp}
//                     />
//                 </div>
//                 <div className="Container text-left">
//                     <div>
//                         <p>EID FIRST NAME SALARY</p>
//                     </div>
//                     {allEmps.map((e, k) => {
//                         return (
//                             <div k={k}>
//                                 {e.eid}  {e.firstName} {e.salary}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>

//         </div>
//     );
// }
// export default Emp;


// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { payHike, setFirstName } from '../redux/EmpSlice';

// const Emp = () => {

//     const dispatch = useDispatch();
//     const empData = useSelector((state) => state.emp.empState);
//     const [empData2, setEmpData2] = useState({
//         eid: 0,
//         firstName: '',
//         salary: 0
//     });

//     const handleEmpChange = (evt) => {
//         setEmpData2({
//             ...empData2,
//             [evt.target.name]: evt.target.value
//         });
//     }


//     return (
//         <div className="container" >
//             <h1 className="display-4 text-primary">Emp Component</h1>
//             <p>This is Emp component.</p>
//             <div>
//                 <input type="number" id="salary" name="salary" value={empData2.salary} onChange={handleEmpChange} />
//                 <button className="btn btn-primary" onClick={() => dispatch(payHike(empData2.salary))}>Pay Hike</button>
//                 <div className="display-4">Salary: {empData.salary}</div>
//             </div>
//             <div>
//                 <input type="text" id="firstName" name="firstName" value={empData2.firstName} onChange={handleEmpChange} />
//                 <button className="btn btn-primary" onClick={() => dispatch(setFirstName(empData2.firstName))}>Set Name</button>
//                 <div className="display-4">First Name: {empData.firstName}</div>
//             </div>
//             <div>

//             </div>
//         </div>
//     );
// }
// export default Emp;


