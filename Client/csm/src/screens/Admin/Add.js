import axios from "axios";
import { useEffect, useState } from "react";

function Add() {

    var [user, setUser] = useState({first_name: "", last_name: "", email:"", password:"", address: "", mobile: "", role:""});
    var [selectedFilter, setSelectedFilter] = useState("ADMIN");  
    var [roles, setRoles] = useState([]);

    useEffect(() => {
      getRoles();
    },[]);


    const onTextChange = (args) =>{
        var copy = {...user};
        copy[args.target.name] = args.target.value;
        setUser(copy);
    }



    const handleFilterChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedFilter(selectedValue);
    };


    const renderOption = () => {
      return roles.map(role => (
        <option key={role} value={role}>
          {role}
        </option>
      ));
    }
  

    function getRoles(){
      axios.get("http://localhost:58447/api/Admin/GetRoles")
      .then((response) => {
        debugger;
        var responseData = response.data;
        setRoles(responseData);
      })
      .catch(error => {
        console.log(error);
      })
    }


    const Submit = () =>{
        debugger;
        axios.post('http://localhost:58447/api/Admin/AddEmployee',user)
        .then(response => {
            if(response.data == "TRUE"){
                
            }else{
              
            }
        })
      }
    
    return(<div className="container row">
    <div className="col"></div>
    <div className="Auth-form-content col">
        <h3 className="Auth-form-title">Add User</h3>
    <div className="form-group mt-1">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              className="form-control mt-1"
              placeholder="e.g James"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              className="form-control mt-1"
              placeholder="e.g Doe"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Address</label>
            <input
              type="text"
              name="address"
              className="form-control mt-1"
              placeholder="e.g Sangli"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Mobile Number</label>
            <input
              type="number"
              name="mobile"
              className="form-control mt-1"
              placeholder="e.g 9923130244"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              required
              />
            {/* <input
              type="hidden"
              name="Status"
              value="ACTIVE"
            /> */}
          </div>
          <div color="red" id="ErrorBox">
          </div>
          <div className="form-group mt-1">
           <div>
            <label>Role</label>
           </div>
           <div>
            <select onChange={handleFilterChange}>
            {renderOption()}
            </select>
           </div>
          </div>
          <div className="d-grid mt-1">
            <button type="submit" className="btn btn-primary" onClick={Submit}>
              Submit
            </button>
          </div>
        </div>
      <div className="col">
      </div>
      </div>);
}

export default Add;