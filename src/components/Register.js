import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Register = (props) => {
    const history = useHistory();

    const [AppUser, setAppUser] = useState({
        userName: '',
        email: '',
        password: ''
    });

    useEffect(
        () => {
            setAppUser({
                email: '',
                password: ''
            }
            );
        }, []);

    const handleAppUser = (event) => {
        console.log(event.target.value);
        setAppUser({
            ...AppUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = async (event) => {
        console.log(AppUser.email);
        console.log(AppUser.password);
        // await 
        history.push('/login');
        // await axios.post(`http://localhost:8082/register`, AppUser)
        //     .then((response) => {
        //         console.log(response.data);
        //     }).catch((error) => {
        //         console.log(error.message)
        //     });
        event.preventDefault();
    }
    return (
        <div className="container">
            <h1 className="display-4 text-primary">Register</h1>
            <div>
                <form className="form form-group form-dark row mt-3" onSubmit={submitAppUser}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Username"
                            value={AppUser.userName}
                            onChange={handleAppUser}
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control mb-3"
                            placeholder="Email"
                            value={AppUser.email}
                            onChange={handleAppUser}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={AppUser.password}
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


