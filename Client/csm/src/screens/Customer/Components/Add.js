import { useEffect, useState, useContext } from "react";
import { AddOrderAPI, getPackageTypeAPI } from "../services/CustomerService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/GlobalStates";

function Add({toggleComponent}) {

    var [order, setOrder] = useState({receiver_name: "", receiver_email: "", receiver_mobile:"", receiver_address:"", amount: "",customer_id:""});
    var [selectedFilter, setSelectedFilter] = useState("ALL");
    var [selectedAmount, setSelectedAmout] = useState("");  
    var [types, setTypes] = useState([]);
    var [authState, setAuthState] = useContext(AuthContext);



    const navigate = useNavigate();
    useEffect(() => {
      getPackageType();
    },[]);

    const onTextChange = (args) =>{
        var copy = {...order};
        copy[args.target.name] = args.target.value;
        setOrder(copy);
    }



    const handleFilterChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedFilter(selectedValue);      
      setSelectedAmout()
    };


    const renderOption = () => {
      return types.map((type) => (
        <option key={type.package_type} value={type.package_type}>
          {type.package_type}
        </option>
      ));
    }
  

    const getPackageType = async () => {
      debugger;
      var response = await getPackageTypeAPI(authState);
      if(response.status == 200){
        setTypes(response.data);
      }else{
        toast.error("Error Fetching Package Types");
      }
    }


  const Submit = async () =>{
    debugger;
    order.customer_id = authState;
    const response = await AddOrderAPI(order, authState);
    if(response.status == 200 && response.data != 0){
      if(response.data == "EXPIRED" || response.data == "INVALID"){
        navigate("/login");
        toast.warning("Session Time Expired");}
        else{
          toggleComponent("COrders");
          toast.success("Order Created Successfully");
        }
     
    }else{
      toast.error("Failed To Create Order");
    }
  }
    
    return(<div className="container row">
    <div className="col"></div>
    <div className="Auth-form-content col">
        <h3 className="Auth-form-title">Add Order</h3>
    <div className="form-group mt-1">
            <label>Receiver Name</label>
            <input
              type="text"
              name="receiver_name"
              className="form-control mt-1"
              placeholder="e.g James"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Receiver Email</label>
            <input
              type="text"
              name="receiver_email"
              className="form-control mt-1"
              placeholder="e.g dsd@gmail.com"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Receiver Mobile</label>
            <input
              type="number"
              name="receiver_mobile"
              className="form-control mt-1"
              placeholder="e.g 9978077092"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Receiver Address</label>
            <input
              type="text"
              name="receiver_address"
              className="form-control mt-1"
              placeholder="e.g Sangli"
              onChange={onTextChange}
              required
              />
          </div>
          <div className="form-group mt-1">
            <label>Package Count</label>
            <input
              type="number"
              name="package_count"
              className="form-control mt-1"
              placeholder="Package Count"
              onChange={onTextChange}
              required
              />
          </div>
           <div className="mt-4 mb-4">
            <select onChange={handleFilterChange}>
            {renderOption()}
            </select>
           </div>
          <div className="form-group mt-1">
          <div className="form-group mt-1">
            <div color="red" id="ErrorBox">
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              className="form-control mt-1"
              onChange={onTextChange}
              required
              />
            </div>
          </div>
          </div>
          <div className="row mt-3">
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary btn-block" onClick={Submit}>
              Submit
            </button>
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-danger btn-block" onClick={() => toggleComponent("COrders")}>
              Cancel
            </button>
          </div>
        </div>
        </div>
      <div className="col">
      </div>
      </div>);
}

export default Add;