import React, { useEffect ,useState, useContext } from 'react';
import "../../css/Complaint.css";
import { toast } from 'react-toastify';
import { addComplaintAPI, getOrderIdAPI } from '../services/CustomerService';
import { AuthContext } from "../../utils/GlobalStates";
import { useNavigate } from 'react-router-dom';

function AddComplaint() {
    var [OrderId, setOrderId] = useState([]);
    var [selectedFilter, setSelectedFilter] = useState(""); 
    const [complaint, setComplaint] = useState('');
    const[authState, setAuthState] = useContext(AuthContext);
    const navigate = useNavigate();

  useEffect(() => {
    GetOrderId();
  },[]);

  const handleSubmit = async () => {
    debugger;
    var data = { complaint: complaint, data:authState ,order_id : selectedFilter};
    const response = await addComplaintAPI(data);
    if(response.status == 200){
      if(response.data == "EXPIRED" || response.data == "INVALID"){
        navigate("/login");
      }else{
        toast.success('Complaint submitted');
      }
    }else{
      toast.error('Error submitting complaint');
    }
  }

  const renderOption = () => {
    return OrderId.map(order => (
      <option key={order} value={order}>
        {order}
      </option>
    ));
  }

  const GetOrderId = async () => {
    var response = await getOrderIdAPI();
    setOrderId(response.data);
  }

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
  };


  return (
    <div style={{ padding: '100px', margin: '150px' }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        {/* You can place any content you want here */}
      </div>
      <div className="form-group mt-1">
           <div>
            <label>Order ID</label>
           </div>
           <div>
            <select onChange={handleFilterChange}>
            {renderOption()}
            </select>
           </div>
          </div>
      <div>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Enter your complaint"
          rows="4" cols="95"
          required
        />
        <button className='button' onClick={handleSubmit}>Submit Complaint</button>
      </div>
    </div>
  );
};

export default AddComplaint;