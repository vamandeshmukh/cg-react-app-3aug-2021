import React, { useEffect, useState } from 'react';

const LoginControl = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [displayElement, setDisplayElement] = useState();
  const [clickText, setClickText] = useState();

  useEffect(() => {
    setIsLoggedIn(false);
    setDisplayElement('Please login to this app.');
    setClickText('Click Here');
  }, []); // second arg [] is provided to prevent infinite loop 

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    if (isLoggedIn) {
      setClickText('Logout');
      setDisplayElement(
        <h1 className="display-4 text-primary">You have logged in.</h1>
      );
    } else {
      setClickText('Login');
      setDisplayElement(
        <h1 className="display-4 text-secondary">You have logged out.</h1>
      );
    }
  }

  return (
    <div className="container">
      <h1 className="display-4 text-primary">Conditional Rendering</h1>
      <p>Display a part of component based on a condition.</p>
      <div className="mt-3">
        <input
          type="submit"
          id="submit"
          name="submit"
          className="form-control btn btn-primary mb-3"
          value={clickText}
          onClick={handleLoginClick}
        />
      </div>
      <div>{displayElement}</div>
    </div>
  );
}
export default LoginControl;
