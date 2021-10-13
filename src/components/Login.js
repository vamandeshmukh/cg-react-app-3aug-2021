import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const Login = (props) => {

    const history = useHistory();

    const [appUser, setAppUser] = useState({
        email: '',
        password: ''
    });

    useEffect(
        () => {
            setAppUser({
                email: 'vaman@gmail.com',
                password: 'vaman@gmail.com'
            }
            );
        }, []);

    const handleAppUser = (event) => {
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        if (appUser.email === 'vaman@gmail.com' && appUser.password === 'vaman@gmail.com') {
            localStorage.setItem(appUser);
            history.push('/home');
        }
        else {
            console.log('Invalid credentials');
        }
        axios.post(`http://localhost:8082/appuser/login`, appUser)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem(appUser); // important 
                localStorage.
                history.push('/home');
            }).catch((error) => {
                console.log(error.message)
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <h1 className="display-4 text-primary">Login</h1>
            <div>
                <form className="form form-group form-dark row mt-3" onSubmit={submitAppUser}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            className="form-control mb-3"
                            placeholder="Email"
                            value={appUser.email}
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={appUser.password}
                            onChange={handleAppUser} />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Login;


