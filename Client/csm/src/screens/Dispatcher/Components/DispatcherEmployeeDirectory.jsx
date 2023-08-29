import { useContext, useEffect, useState } from "react";
import {getEmployeesAPI} from "../Services/DispatcherService";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/GlobalStates";

function DispatcherEmployeeDirectory() {
   
    var [employees, setEmployees] = useState([]);
    var [authState, setAuthState] = useContext(AuthContext);
    const navigate = useNavigate();
    
  
    const headerMapping = {
      'Employee ID': 'user_Id',
      'First Name': 'first_name',
      'Last Name': 'last_name',
      'Email': 'email',
      'Address': 'address',
      'Mobile': 'mobile',
      'Status': 'status'
    };
  
  
    useEffect(() => {
      loadEmployees();
    },[]);
  
    const loadEmployees = async(selectedFilter) => {
      debugger;
      let response = await getEmployeesAPI(authState);
      if(response.status == 200){
        if(response.data == "EXPIRED" || response.data == "INVALID"){
          navigate("/login");
          toast.warning("Session Time Expired");
        }
        else{
          setEmployees(user_info);
        }   
      }else{
        toast.error('Error while calling get api')
      }  
    }  

    const renderEmployees = () =>
    employees.map(employee => (
      <tr key={employee.user_id}>
        {Object.keys(headerMapping).map(label => (
            <td>{employee[headerMapping[label]]}</td>
            ))}
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
  
  
    return (<>
      <div style={{ margin: '50px' }}>
        <div style={{display:"flex", flexDirection:"row" , alignItems:"center", justifyContent:"space-between"}}> 
          <div style={{alignContent:"center"}}>
            <h2>Employees</h2>
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

export default DispatcherEmployeeDirectory;