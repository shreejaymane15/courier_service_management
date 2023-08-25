import { useEffect, useState } from "react";
import { AddOrder, getPackageTypeAPI } from "../services/CustomerService";
import { toast } from "react-toastify";

function Add({toggleComponent}) {

    var [order, setOrder] = useState({receiver_name: "", receiver_email: "", receiver_mobile:"", receiver_address:"", package_type:""});
    var [selectedFilter, setSelectedFilter] = useState("ALL");  
    var [types, setType] = useState([]);

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
    };


    const renderOption = () => {
      return order.map(order => (
        <option key={order} value={order}>
          {order}
        </option>
      ));
    }
  

    const getPackageType = async () => {
      var response = await getPackageTypeAPI();
      setType(response.data);
    }


  const Submit = async () =>{
    debugger;
    var package_type = selectedFilter;
    var data = {order}
    const response = await AddOrder(data);
    if(response.status == 200 && response.data != 0){
      toggleComponent("COrders");
      toast.success("Order Created Successfully");
    }else{
      toast.error("Failed To Create Order");
    }
  }
    
    return(<div className="container row">
    <div className="col"></div>
    <div className="Auth-form-content col">
        <h3 className="Auth-form-title">Add User</h3>
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
          <div className="form-group mt-1">
            <label>Package Type</label>
            <input
              type="text"
              name="type"
              className="form-control mt-1"
              placeholder="Type"
              onChange={onTextChange}
              required
              />
          </div>
          <div color="red" id="ErrorBox">
          </div>
          <div className="form-group mt-1">
           <div>
            <label>Type</label>
           </div>
           <div>
            <select onChange={handleFilterChange}>
            {renderOption()}
            </select>
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