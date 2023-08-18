import { useEffect, useState } from "react";
import axios from "axios";


function EmployeeDirectory() {
   
    var [employees, setEmployees] = useState([]);
    var [selectedFilter, setSelectedFilter] = useState("ADMIN");
    var [roles, setRoles] = useState([]);
  
  
    const headerMapping = {
      'User ID': 'user_Id',
      'First Name': 'first_name',
      'Last Name': 'last_name',
      'Email': 'email',
      'Address': 'address',
      'Mobile': 'mobile',
      'Status': 'status'
    };
  
  
    useEffect(() => {
      getEmployees();
      getRoles();
    },[]);
  
    useEffect(() => {
      console.log(selectedFilter);
      getEmployees();
    },[selectedFilter]);
  
  
  
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
  
      
    function getEmployees(){
      debugger;
      const url = `http://localhost:58447/api/Admin/GetEmployees/${selectedFilter}`;
      axios.get(url)
      .then((response) => {
        debugger;
        var responseData = response.data;
        setEmployees(responseData);
      })
      .catch(error => {
        console.log(error);
      })
    }



    function deleteEmployee(props){
        debugger;
        var id = props.target.id;
        const url = `http://localhost:58447/api/Admin/DeleteEmployee/${id}`;
        axios.put(url)
        .then((response) => {
          debugger;
          var responseData = response.data;
          if(responseData != 0 ){
            console.log("error");
          }else{
            console.log("Successfully Inactive");
            getEmployees();
          }
        })
        .catch(error => {
          console.log(error);
        })
      }


      function updateEmployee(props){
        debugger;
        var id = props.target.id;
        const url = `http://localhost:58447/api/Admin/UpdateEmployee/${id}`;
        axios.put(url)
        .then((response) => {
          debugger;
          var responseData = response.data;
          if(responseData != 0 ){
            console.log("error");
          }else{
            console.log("Successfully Inactive");
            getEmployees();
          }
        })
        .catch(error => {
          console.log(error);
        })
      } 
  
  
  
    const renderOption = () => {
      return roles.map(role => (
        <option key={role} value={role}>
          {role}
        </option>
      ));
    }
  
  
  
    const renderEmployees = () =>
      employees.map(employee => (
        <tr key={employee.user_id}>
          {Object.keys(headerMapping).map(label => (
              <td>{employee[headerMapping[label]]}</td>
              ))}
          <td ><button className="btn btn-warning" id={employee[headerMapping['User ID']]} onClick={(props) => updateEmployee(props)}>Update</button></td>
          <td ><button className="btn btn-danger"  id={employee[headerMapping['User ID']]} onClick={(props) => deleteEmployee(props)}>Delete</button></td>
        </tr>
      ));
  
      
    const renderHeader = () => {
      return (
        <thead>
        <tr>
            {Object.keys(headerMapping).map(label => (
                <th key={label}>{label}</th>
            ))}
        </tr>
        </thead>
      );
    }
  
  
    const handleFilterChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedFilter(selectedValue);
    };
  
  
  
    return (<>
      <div style={{ margin: '50px' }}>
        <div style={{display:"flex", flexDirection:"row" , alignItems:"center", justifyContent:"space-between"}}> 
          <div style={{alignContent:"center"}}>
            <h2>Employees</h2>
          </div>
          <div>
          <select onChange={handleFilterChange}>
            {renderOption()}
          </select>
          </div>
        </div>
        <table className="table table-bordered">
          {renderHeader()}
          <tbody>
          {renderEmployees()}
          </tbody>
        </table>
      </div>
  </>  );
  }

export default EmployeeDirectory;