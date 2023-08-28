import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../utils/GlobalStates";
import {useNavigate} from 'react-router-dom';
import { getComplaintsAPI, getComplaintStatusAPI } from "../services/CustomerService";
import { toast } from "react-toastify";


function ComplaintSupport({toggleComponent}) {
   
  var [complaints, setComplaints] = useState([]);
  var [selectedFilter, setSelectedFilter] = useState("ALL");
  var [ComplaintStatus, setComplaintStatus] = useState([]);
  var [authState, setAuthState] = useContext(AuthContext);

const navigate = useNavigate();


  const headerMapping = {
    'Complaint Id': 'complaint_id',
    'Complaint Description': 'complaint1',
    'Status': 'status',
    'Complaint Date': 'placed_date',
    'Resolved Date': 'resolved_date',
    'Order Id': 'order_id',
    
  };


  useEffect(() => {
    getComplaints(selectedFilter);
    getComplaintStatus();
  },[]);

  useEffect(() => {
    console.log(selectedFilter);
    getComplaints();
  },[selectedFilter]);

  const getComplaintStatus = async() => {
    debugger;
    const response = await getComplaintStatusAPI(authState);
    if(response.status == 200){
      if(response.data == "EXPIRED" || response.data == "INVALID"){
        navigate("/login");
        toast.warning("Session Time Expired");
      }
      else{
        setComplaintStatus(response.data);
      }
    }else{
      toast.error('Error while calling getStatusAPI')
    }
  }

  const getComplaints = async() => {
    debugger;
    const response = await getComplaintsAPI(selectedFilter, authState);
    if(response.status == 200){
      if(response.data == "EXPIRED" || response.data == "INVALID"){
        navigate("/login");
        toast.warning("Session Time Expired");
      }
      else{
        setComplaints(response.data);
      }   
    }else{
      toast.error('Error while calling get api')
    }  
  }  





const AddComplaint = () =>{
  debugger;
  toggleComponent("AddComplaint");
} 




  const renderComplaints = () =>
    complaints.map(complaint=> (
      <tr key={complaint.complaint_id}>
        {Object.keys(headerMapping).map(label => (
            <td key={label}>{complaint[headerMapping[label]]}</td>
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


  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
  };



  return (<>
    <div style={{ margin: '50px' }}>
      <div style={{display:"flex", flexDirection:"row" , alignItems:"center", justifyContent:"space-between"}}> 
        <div>
          <h2>My Complaints</h2>
        </div>
        <div style={{display:"flex", flexDirection:"row" , alignItems:"center", justifyContent:"end"}}> 
          <div style={{margin:"20px"}}>
            <button className="btn btn-primary" 
            style={{paddingLeft:"20px", paddingRight:"20px"}} 
            onClick={AddComplaint}>
            New Complaint</button>
          </div>
        <div>
        <select onChange={handleFilterChange}>
          <option value="ALL">All</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          {/* {renderOption()} */}
        </select>
        </div>
      </div>
      </div>
      <table className="table table-bordered">
        {renderHeader()}
        <tbody>
        {renderComplaints()}
        </tbody>
      </table>
    </div>
</>  );

}
export default ComplaintSupport;