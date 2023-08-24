import { useEffect, useState } from "react";
import axios from "axios";

function NewOrder() {
   
  var [orders, setOrders] = useState([]);
 
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
    getOrders();
  },[]);

    
  function getOrders(){
    debugger;
    const url = `http://localhost:58447/api/Dispatcher/GetOrders`;
    axios.get(url)
    .then((response) => {
      debugger;
      var responseData = response.data;
      setOrders(responseData);
    })
    .catch(error => {
      console.log(error);
    })
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
export default NewOrder;