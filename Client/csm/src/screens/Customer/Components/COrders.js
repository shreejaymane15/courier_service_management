import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../utils/GlobalStates";
import {useNavigate} from 'react-router-dom';
import { getOrdersAPI, getStatusAPI } from "../services/CustomerService";
import { toast } from "react-toastify";


function COrders({toggleComponent}) {
   
  var [orders, setOrders] = useState([]);
  var [selectedFilter, setSelectedFilter] = useState("ALL");
  var [status, setStatus] = useState([]);
  var [authState, setAuthState] = useContext(AuthContext);

const navigate = useNavigate();


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
    getOrders(selectedFilter);
    getStatus();
  },[]);

  useEffect(() => {
    console.log(selectedFilter);
    getOrders();
  },[selectedFilter]);

    


  const getStatus = async() => {
    debugger;
    const response = await getStatusAPI(authState);
    if(response.status == 200){
      if(response.data == "EXPIRED" || response.data == "INVALID"){
        navigate("/login");
        // toast.warning("Session Time Expired");
      }
      else{
        setStatus(response.data);
      }
    }else{
      toast.error('Error while calling getStatusapi')
    }
  }

  const getOrders = async() => {
    debugger;
    let response = await getOrdersAPI(selectedFilter, authState);
    if(response.status == 200){
      if(response.data == "EXPIRED" || response.data == "INVALID"){
        navigate("/login");
        toast.warning("Session Time Expired");
      }
      else{
        setOrders(response.data);
      }   
    }else{
      toast.error('Error while calling get api')
    }  
  }  





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