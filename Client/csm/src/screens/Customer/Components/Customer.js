import CustomerSideBar from "./CustomerSideBar";
import NavBarProtected from "../../Components/NavBar";
import Dashboard from "./Dashboard";
import { useState } from "react";
import COrders from "./COrders";
import Addresses from "./Addresses";
import MyProfile from "./MyProfile";
import ComplaintSupport from "./ComplaintSupport";
import Add from "./Add";
import AccountSettings from "./AccountSettings";
//import { AddOrder } from "../services/CustomerService";
//import { AddNewOrder } from "../services/CustomerService";


function Customer() {

    const [activeComponent, setActiveComponent] = useState("Dashboard");

    const toggleComponent = (component) => {
      setActiveComponent(component);
    };
  
    const componentMapping = {
      Dashboard: <Dashboard />,
      COrders: <COrders toggleComponent={toggleComponent}/>,
      Addresses: <Addresses/>,
      MyProfile: <MyProfile/>,
      AccountSettings: <AccountSettings />,
      Add:<Add toggleComponent={toggleComponent}/>,
      ComplaintSupport: <ComplaintSupport/>,
    };


    return (<>
      <NavBarProtected/>
      <div style={{display:"flex"}}>
      <div style={{flex: 3}}>
      <CustomerSideBar  toggleComponent={toggleComponent}/>
      </div>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {componentMapping[activeComponent]}
      </div>
  </div>
  </>);
}

export default Customer;