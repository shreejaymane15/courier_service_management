import CustomerSideBar from "../Customer/Components/CustomerSideBar";
import NavBarProtected from "../Components/NavBarProtected";
import Dashboard from "../Customer/Components/Dashboard";
import { useState } from "react";
import COrders from "../Customer/Components/COrders";
import MyProfile from "../Customer/Components/MyProfile";
import Support from "../Customer/Components/Support";
import AccountSettings from "../Customer/Components/AccountSettings";


function Customer() {

    const [activeComponent, setActiveComponent] = useState("Dashboard");

    const toggleComponent = (component) => {
      setActiveComponent(component);
    };
  
    const componentMapping = {
      Dashboard: <Dashboard />,
      COrders: <COrders/>,
      MyProfile: <MyProfile/>,
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