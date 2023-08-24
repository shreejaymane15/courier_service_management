import React, { useState } from 'react';
import '../css/App.css';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../Services/LoginServices';
import { toast } from 'react-toastify';

function Login() {

  const navigate = useNavigate();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  
  const GoToSignUp = () =>{
    navigate("/register");
  }

  const sendLoginData = async() => {
    const user = {
      email: email,
      password: password
    };
    const response = await loginAPI(user);
    if(response.status == 200){
      sessionStorage.setItem("user_id",response.data.user_id);
      if (response.data != 0) {
        switch (response.data.role_id) {
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
      } 
      toast.success(`Welcome ${response.data.first_name}!`);
    }else{
      toast.error("Customer Login Failed. Please Try Again!");
    }
  }
  

  return (<>
  <div className="Auth-form-container">
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
  </div>
  </>);
}

export default Login;