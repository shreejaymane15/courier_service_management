import { useEffect, useState } from "react";
import {getComplaintsAPI, getRolesAPI} from "../Services/DispatcherService";
import {toast} from 'react-toastify';


function RaisedTickets() {
   
    var [complaints, setComplaints] = useState([]);
    var [selectedFilter, setSelectedFilter] = useState("");
    var [roles, setRoles] = useState([]);
  
    const headerMapping = {
      'Complaint ID': 'complaint_id',
      'Complaint': 'complaint',
      'Status': 'status',
      'Placed Date': 'placed_date',
      'Resolved Date': 'resolved_date'
    };
  
  
    useEffect(() => {
      loadComplaints(selectedFilter);
      loadRoles();
    },[]);
  
    useEffect(() => {
      loadComplaints(selectedFilter);
    },[selectedFilter]);

    const loadComplaints = async(selectedFilter) => {
        // debugger;
        // let id = props.target.id;
        let response = await getComplaintsAPI(selectedFilter);
        if(response.status == 200){
          setComplaints(response.data);
        }else{
          toast.error('Error while calling get api')
        }  
      } 
      
      const loadRoles = async() => {
        // debugger;
        let response = await getRolesAPI();
        if(response.status == 200){
          setRoles(response.data);
        }else{
          toast.error('Error while calling roles api')
        }
      }


      const renderOption = () => {
        return roles.map(role => (
          <option key={role} value={role}>
            {role}
          </option>
        ));
      }
  
    const renderComplaints = () =>
    complaints.map(complaint => (
        <tr key={complaint.complaint_id}>
          {Object.keys(headerMapping).map(label => (
              <td>{complaint[headerMapping[label]]}</td>
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
          <div style={{alignContent:"center"}}>
            <h2>Complaints</h2>
          </div>
          <div>
        <select onChange={handleFilterChange}>
          <option value="3">Delivery Personnel</option>
          <option value="4">Customer</option>
          {renderOption()}
        </select>
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

export default RaisedTickets;