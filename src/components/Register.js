import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";

const Register = (props) => {
    const history = useHistory();

    const [appUser, setAppUser] = useState({});

    useEffect(
        () => {
            setAppUser({
                userId: 0,
                email: '',
                password: ''
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
        console.log(appUser.email);
        console.log(appUser.password);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        };
        axios.post(`http://localhost:8082/appuser/register`, appUser, config)
            .then((response) => {
                console.log(response.data);
                history.push('/login');
            }).catch((error) => {
                console.log(error.message)
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <h1 className="display-4 text-primary">Register</h1>
            <div>
                <form className="form form-group form-dark row mt-3" onSubmit={submitAppUser}>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control mb-3"
                            placeholder="Email"
                            value={appUser.email}
                            onChange={handleAppUser}
                        />
                        <input
                            type="password"
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
                            value="Register"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Register;


