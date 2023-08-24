import { useEffect, useState } from "react";
import axios from "axios";


function RaisedTickets() {
   
    var [complaints, setComplaints] = useState([]);
  
    const headerMapping = {
      'Complaint ID': 'complaint_id',
      'Complaint': 'complaint',
      'Status': 'status',
      'Placed Date': 'placed_date',
      'Resolved Date': 'resolved_date'
    };
  
  
    useEffect(() => {
      getComplaints();
    },[]);

      
    function getComplaints(props){
      debugger;
      var id = props.target.id;
      const url = `http://localhost:58447/api/Dispatcher/GetComplaints/${id}`;  
      axios.get(url)
      .then((response) => {
        debugger;
        var responseData = response.data;
        setComplaints(responseData);
      })
      .catch(error => {
        console.log(error);
      })
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
  
  
    return (<>
      <div style={{ margin: '50px' }}>
        <div style={{display:"flex", flexDirection:"row" , alignItems:"center", justifyContent:"space-between"}}> 
          <div style={{alignContent:"center"}}>
            <h2>Complaints</h2>
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