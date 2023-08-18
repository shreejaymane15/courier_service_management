import { useEffect, useState } from "react";
import axios from "axios";
import { error } from "jquery";

function Orders() {
   
    var [orders, setOrders] = useState([]);
    var [order, setOrder] = useState({order_id: "", reciver_name: "", reciver_email: "", reciver_mobile: "", reciver_address:"", package_count:"", amount:"", status:"", customer_id:"", personnel_id:""});


    useEffect(() => {
        getOrders();
    },[]);


    function getOrders() {
        debugger;
        // axios.get("http://localhost:58447/api/Admin/orders")
        // .then((response) => {
        //     var responseData = response.data;
        //     setOrders(responseData);
        //     renderOrders();
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = (response, error) => {
          if (helper.status === 200 && helper.readyState === 4) {
            var result = JSON.parse(helper.responseText);
            setOrders(result);
            } else {
              console.log(error);
            }
          }
        helper.open("GET", "http://localhost:58447/api/Admin/GetOrders");
        helper.send();
      
    }


    const renderOrders = () => {
        return orders.map(({ order_id, receiver_name, receiver_email, receiver_mobile, receiver_address, package_count, amount, status, customer_id, personnel_id}) => {
          return <tr key={order_id} >
          <td style={{ padding: '10px', border: '1px solid black' }}>{order_id}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{receiver_name}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{receiver_email}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{receiver_mobile}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{receiver_address}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{package_count}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{amount}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{status}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{customer_id}</td>
          <td style={{ padding: '10px', border: '1px solid black' }}>{personnel_id}</td>
        </tr>
        })
      }

    const renderHeader = () => {
      
    }

    return (<>
        <div style={{ margin: '50px' }}>
        <h2>Orders Table</h2>
        <table className="table table-responsive table-bordered">
            {renderHeader()}
            <tbody>
            {renderOrders()}
            </tbody>
        </table>
        </div>
    </>  );

}
export default Orders;