import { useEffect, useState } from "react";
import {getOrdersAPI, getHubLocationsAPI} from "../Services/DispatcherService";
import {toast} from 'react-toastify';

function OrderSummary() {
   
  var [orders, setOrders] = useState([]);
  var [selectedFilter, setSelectedFilter] = useState("");
  var [hubLocations, setHubLocations] = useState([]);
 
  const headerMapping = {
    'Order ID': 'order_id',
    'Receiver Name': 'receiver_name',
    'Receiver Email': 'receiver_email',
    'Receiver Mobile': 'receiver_mobile',
    'Receiver Address': 'receiver_address',
    'Package Count': 'package_count',
    'Amount': 'amount',
    'Status': 'status',
    'Customer ID': 'customer_id',
    'Personnel ID': 'personnel_id'
  };


  useEffect(() => {
    loadOrders(selectedFilter);
    getHubLocations();
  },[]);

  useEffect(() => {
    loadOrders(selectedFilter);
  },[selectedFilter]);

  const loadOrders = async(selectedFilter) => {
    // debugger;
    let response = await getOrdersAPI(selectedFilter);
    if(response.status == 200){
      setOrders(response.data);
    }else{
      toast.error('Error while calling get api')
    }  
  }
  
  const getHubLocations = async() => {
    const response = await getHubLocationsAPI();
    if(response.status == 200){
      setHubLocations(response.data);
    }else{
      toast.error('Error while calling getcities api')
    }
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


  return (<>
    <div style={{ margin: '50px' }}>
      <div style={{display:"flex", flexDirection:"row" , alignItems:"center", justifyContent:"space-between"}}> 
        <div>
          <h2>Orders Table</h2>
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
export default OrderSummary;