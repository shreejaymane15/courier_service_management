
import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import "../../css/Complaint.css";
import { toast } from 'react-toastify';
import { getOrderIdAPI } from '../services/CustomerService';


function ComplaintSupport () {
    var [OrderId, setOrderId] = useState([]);
    var [selectedFilter, setSelectedFilter] = useState(""); 
    const [complaint, setComplaint] = useState('');



  useEffect(() => {
    GetOrderId();
  },[]);

  const handleSubmit = async () => {
    var data = { complaint: complaint, customer_id: 3 ,order_id : selectedFilter};
    try {
      const response = await axios.post('http://localhost:58447/api/Customer/AddComplaint', data);
      toast.success('Complaint submitted');
      // You can reset the complaint state or display a success message here
    } catch (error) {
      toast.error('Error submitting complaint');
      // Handle the error here
    }
  };

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

export default ComplaintSupport;