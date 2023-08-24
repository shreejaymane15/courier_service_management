import CustomerSideBar from "./CustomerSideBar";
import NavBarProtected from "../Components/NavBarProtected";
import Dashboard from "./Dashboard";
import { useState } from "react";
import COrders from "./COrders";
import Addresses from "./Addresses";
import Support from "./Support";
import AccountSettings from "./AccountSettings";


function Customer() {

    const [activeComponent, setActiveComponent] = useState("Dashboard");

    const toggleComponent = (component) => {
      setActiveComponent(component);
    };
  
    const componentMapping = {
      Dashboard: <Dashboard />,
      COrders: <COrders/>,
      Addresses: <Addresses/>,
      AccountSettings: <AccountSettings />,
      Support: <Support />,
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