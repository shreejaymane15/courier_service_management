import { useEffect, useState } from "react";
import axios from "axios";

function COrders() {
   
  var [orders, setOrders] = useState([]);
  var [selectedFilter, setSelectedFilter] = useState("ALL");
//   var [status, setStatus] = useState([]);


  const headerMapping = {
    'Order ID': 'order_id',
    'Receiver Name': 'receiver_name',
    'Receiver Email': 'receiver_email',
    'Receiver Mobile': 'receiver_mobile',
    'Receiver Address': 'receiver_address',
    'Package Count': 'package_count',
    'Amount': 'amount',
    'Status': 'status',
  };


  useEffect(() => {
    getOrders();
    // getStatus();
  },[]);

  useEffect(() => {
    console.log(selectedFilter);
    getOrders();
  },[selectedFilter]);



//   function getStatus(){
//     axios.get("http://localhost:58447/api/Customer/GetStatus")
//     .then((response) => {
//       debugger;
//       var responseData = response.data;
//       setStatus(responseData);
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   }

    
  function getOrders(){
    debugger;
    if(selectedFilter != "ALL"){
      axios.post(`http://localhost:58447/api/Customer/GetByStatus`,{Id: 3, Status: selectedFilter})
      .then((response) => {
      debugger;
      var responseData = response.data;
      setOrders(responseData);
      })
      .catch(error => {
      console.log(error);
      })
    }else if(selectedFilter == "ALL"){
      debugger;
      axios.get(`http://localhost:58447/api/Customer/GetMyOrders/${3}`)
      .then((response) => {
      debugger;
      var responseData = response.data;
      setOrders(responseData);
      })
      .catch(error => {
      console.log(error);
      })
    }
    
  }



//   const renderOption = () => {
//     return status.map(status => (
//       <option key={status} value={status}>
//         {status}
//       </option>
//     ));
//   }



  const renderOrders = () =>
    orders.map(order => (
      <tr key={order.order_id}>
        {Object.keys(headerMapping).map(label => (
            <td key={label}>{order[headerMapping[label]]}</td>
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
          <h2>My Orders</h2>
        </div>
        <div>
        <select onChange={handleFilterChange}>
          <option value="ALL">All</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
          <option value="Canceled">Canceled</option>
          {/* {renderOption()} */}
        </select>
        </div>
      </div>
      <table className="table table-bordered">
        {renderHeader()}
        <tbody>
        {renderOrders()}
        </tbody>
      </table>
    </div>
</>  );

}
export default COrders;