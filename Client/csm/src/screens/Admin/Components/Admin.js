import SideBar from "../Components/SideBar";
import NavBarProtected from "../../NavBarProtected";
import Dashboard from "../Components/Dashboard";
import { useState } from "react";
import Orders from "../Components/Orders";
import EmployeeDirectory from "../Components/EmployeeDirectory";
import Reports from "../Components/Reports";
import Update from "../Components/Update";
import Add from "../Components/Add";

function Admin() {

    const [activeComponent, setActiveComponent] = useState("Dashboard");
    const [id, setId] = useState("1");
    
    
    const toggleComponent = (component) => {
      debugger;
      setActiveComponent(component);
    };

    const updateData = (component) => {
      debugger;
      setId(component);
    };
  
    const componentMapping = {
      Dashboard: <Dashboard />,
      Orders: <Orders />,
      EmployeeDirectory: <EmployeeDirectory toggleComponent={toggleComponent} updateData={updateData} />,
      Reports: <Reports />,
      Update: <Update id={id} updateData={updateData} toggleComponent={toggleComponent}/>,
      Add:  <Add toggleComponent={toggleComponent}/>
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