import React, {useState, useEffect} from 'react';

import './style.css';

const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        console.log(user);
    }

    useEffect(() => {
      // podmínka se provede v případě, že není vyplněn username, že e-mail obsahuje zavináč a tento je nejdříve na 2. pozici
      if (
        !user.username &&
        user.email.includes("@") &&
        user.email.indexOf("@") >= 1
      ) {
        generateUserName();
      } 
    },
    [user])

    const generateUserName = () => {
        let i = user.email.indexOf('@'); //zjišťuji pozici zavináče
        let generatedUserName = user.email.slice(0,i); //beru vše před zavináčem
        setUser({ ...user, username: generatedUserName });
    }

    return (
      <div className="registration">
        <h1>Registration</h1>
        <div className="whiteBox">
          <div className="fields">
              <label htmlFor="email">Email Adress</label>
              <input type="text" name="email" id="email" onChange={handleChange} />
          </div>
          <div className="fields">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={handleChange}
              />
          </div>
          <div className="fields">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
          </div>
          <div className="fields">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                onChange={handleChange}
              />
          </div>
          <button onClick={handleClick}>Register</button>
        </div>
      </div>
    );
}

export default Registration;