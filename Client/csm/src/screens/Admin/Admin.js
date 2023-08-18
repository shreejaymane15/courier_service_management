import SideBar from "./SideBar";
import NavBarProtected from "../NavBarProtected";
import Dashboard from "./Dashboard";
import "./Admin.css";
import { useState } from "react";
import Orders from "./Orders";
import EmployeeDirectory from "./EmployeeDirectory";
import Reports from "./Reports";


function Admin() {

    const [activeComponent, setActiveComponent] = useState("Dashboard");

    const toggleComponent = (component) => {
      setActiveComponent(component);
    };
  
    const componentMapping = {
      Dashboard: <Dashboard />,
      Orders: <Orders />,
      EmployeeDirectory: <EmployeeDirectory />,
      Reports: <Reports />,
    };


    return (<>
        <NavBarProtected/>
        <div style={{display:"flex"}}>
        <div style={{flex: 3}}>
        <SideBar  toggleComponent={toggleComponent}/>
        </div>
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {componentMapping[activeComponent]}
        </div>
    </div>
    </>);
}

export default Admin;