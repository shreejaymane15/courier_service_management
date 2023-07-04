import React from 'react';
import './css/App.css';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  
  const GoToSignUp = () =>{
    navigate("/register");
  }

  // SendLoginData = (props) => {

  //   const helper = new XMLHttpRequest();
  //   helper.onreadystatechange = () =>{
  //     if(helper.status == 200 && helper.readyState == 4){
  //       var result = JSON.parse(helper.responseText);
  //       if(result){
  //         console.log(result);
  //         navigate("/admin");
  //       }
  //       else{
  //         console.log(error);
  //       }
  //     }
  //   }
  //   helper.open("POST", "http://127.0.0.1:9999/login");
  //   helper.setRequestHeader("Content-Type", "application/json");
  //   helper.send(JSON.stringify(props));
  // }
  

  return (<>
  <div className="Auth-form-container">
    <form className="Auth-form">
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
            />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            name='LoginPassword'
            className="form-control mt-1"
            placeholder="Enter password"
            required
            />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-center mt-2">
        <a href="#"> Forgot password?</a>
        </p>
      </div>
    </form>
  </div>
  </>);
}

export default Login;