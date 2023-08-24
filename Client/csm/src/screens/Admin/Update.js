import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update({id, updateData, toggleComponent}) {

    var [user, setUser] = useState({first_name: "", last_name: "", email:"", address: "", mobile: "", status:""});
    var [updateid, setUpdateid] = useState();
    const navigate = useNavigate();


    useEffect (() =>{
        GetEmployeeDetails();
    },[id])

    const onTextChange = (args) =>{
        var copy = {...user};
        copy[args.target.name] = args.target.value;
        setUser(copy);
    }

    const GetEmployeeDetails = () =>{
        debugger;
        setUpdateid(id);
        const url = `http://localhost:58447/api/Admin/GetEmployeeDetails/${id}`;
        axios.get(url)
        .then((response) => {
          debugger;
          var responseData = response.data;
          setUser(responseData);
        })
        .catch(error => {
          console.log(error);
        })
    }

    const UpdateEmployeeDetails = () =>{
        debugger;
        const url = `http://localhost:58447/api/Admin/UpdateEmployeeDetails/${updateid}`;
        axios.put(url,user)
        .then((response) => {
          debugger;
          var responseData = response.data;
          if(responseData != 0){
            toggleComponent("EmployeeDirectory");
          }
        })
        .catch(error => {
          console.log(error);
        })
    }

    return ( <>
    <div className="container row">
    <div className="col"></div>
      <div className="Auth-form-content col">
      <h3 className="Auth-form-title">Update User</h3>
      <div className="form-group mt-3">
      <label>First Name</label>
          <input
              type="text"
              name="first_name"
              className="form-control mt-1"
              value={user.first_name}
              onChange={onTextChange}
              required
              />
      </div>
      <div className="form-group mt-3">
      <label>Last Name</label>
      <input
          type="text"
          name="last_name"
          className="form-control mt-1"
          value={user.last_name}
          onChange={onTextChange}
          required
          />
      </div>
      <div className="form-group mt-3">
      <label>Address</label>
      <input
          type="text"
          name="address"
          className="form-control mt-1"
          value={user.address}
          onChange={onTextChange}
          required
          />
      </div>
      <div className="form-group mt-3">
      <label>Mobile Number</label>
      <input
          type="number"
          name="mobile"
          className="form-control mt-1"
          value={user.mobile}
          onChange={onTextChange}
          required
          />
      </div>
      <div className="form-group mt-3">
          <label>Email address</label>
          <input
          type="email"
          name='LoginEmail'
          className="form-control mt-1"
          value={user.email}
          onChange={onTextChange}
          required>
          </input>
      </div>
      <div className="form-group mt-3">
          <label>Status</label>
          <input
          type="text"
          name='status'
          className="form-control mt-1"
          value={user.status}
          onChange={onTextChange}
          required>
          </input>
      </div>
      <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={UpdateEmployeeDetails}>
            Update
          </button>
        </div>
      </div>
      <div className="col"></div>
    </div>
    </> );
}

export default Update;