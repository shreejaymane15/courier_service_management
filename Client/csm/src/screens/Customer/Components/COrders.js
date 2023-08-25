  import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { createUrl } from "../../utils/utils";
import { AuthContext } from "../../utils/GlobalStates";


function COrders({toggleComponent}) {
   
  var [orders, setOrders] = useState([]);
  var [selectedFilter, setSelectedFilter] = useState("ALL");
//   var [status, setStatus] = useState([]);
  var [authState, setAuthState] = useContext(AuthContext);

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
  },[]);

  useEffect(() => {
    console.log(selectedFilter);
    getOrders();
  },[selectedFilter]);

    
  function getOrders(){
    debugger;
    if(selectedFilter != "ALL"){
      axios.post(`http://localhost:58447/api/Customer/GetByStatus`,{authState, Status: selectedFilter})
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
      axios.get(`http://localhost:58447/api/Customer/GetMyOrders/${authState.user_id}`)
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

const AddOrder = () =>{
  debugger;
  toggleComponent("Add");
} 




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
        <div style={{display:"flex", flexDirection:"row" , alignItems:"center", justifyContent:"end"}}> 
          <div style={{margin:"20px"}}>
            <button className="btn btn-primary" 
            style={{paddingLeft:"20px", paddingRight:"20px"}} 
            onClick={AddOrder}>
            Create Order</button>
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