import React, { useState } from 'react';
import './css/App.css';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  
  const GoToSignUp = () =>{
    navigate("/register");
  }

  function sendLoginData() {
    const helper = new XMLHttpRequest();
    helper.onreadystatechange = (response, error) => {
      if (helper.status === 200 && helper.readyState === 4) {
        var result = JSON.parse(helper.responseText);
        if (result != 0) {
          switch (result.role_id) {
            case 1:
              navigate("/admin");              
              break;
            case 2:
              navigate("/dispatcher");              
              break;
            case 3:
              navigate("/deliverypersonnel");              
              break;
            case 4:
              navigate("/customer");              
              break;
            default:
              break;
          }

        } else {
          console.log(error);
        }
      }
    };
    helper.open("POST", "http://localhost:58447/api/Login/Login");
    helper.setRequestHeader("Content-Type", "application/json");
    const user = {
      email: email,
      password: password
    };
    helper.send(JSON.stringify(user));
  }
  

  return (<>
  <div className="Auth-form-container">
    {/* <form className="Auth-form"> */}
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="text-center">
          Not Registered?{" "}
          <span className="link-primary" onClick={GoToSignUp}>
            Sign Up
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            name='LoginEmail'
            className="form-control mt-1"
            placeholder="Enter email"
            required
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            name='LoginPassword'
            className="form-control mt-1"
            placeholder="Enter password"
            required
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={sendLoginData}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-center mt-2">
        <a href="#"> Forgot password?</a>
        </p>
      </div>
    {/* </form> */}
  </div>
  </>);
}

export default Login;