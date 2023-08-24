
function SideBar({toggleComponent}) {

  const toggleOrders = () => {
    toggleComponent("Orders");
  };

  const toggleDashboard = () => {
    toggleComponent("Dashboard");
  };

  const toggleEmployeeDirectory = () => {
    toggleComponent("EmployeeDirectory");
  };

  const toggleCustomers = () => {
    toggleComponent("Customer");
  };


  const toggleReports = () => {
    toggleComponent("Reports");
  };



  return (<>
    <div className="sidebar border border-right col-md-12 p-0 " style={{ height: "100vh", backgroundColor:"#CACFD2" }}>
    <div
      className="offcanvas-lg offcanvas-end bg-body-tertiary"
      tabIndex={-1}
      id="sidebarMenu"
      aria-labelledby="sidebarMenuLabel"
    >
      <div className="d-md-flex flex-column" style={{backgroundColor:"#CACFD2"}}> 
        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a
              className="nav-link d-flex align-items-center active"
              aria-current="page"
              onClick={toggleDashboard}
              style={{marginTop:"10px", marginLeft:"50px", color:"#000", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}
              >
              Dashboard
            </a>
            </button>
          </li>
          <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center" 
            onClick={toggleOrders}
            style={{marginTop:"10px", marginLeft:"65px", color:"#000", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
              Orders
            </a>
            </button>
          </li>
          <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center" 
            onClick={toggleEmployeeDirectory}
            style={{marginTop:"10px", marginLeft:"20px", color:"#000", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
              Employee Directory
            </a>
          </button>
          </li>
          <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center" 
            onClick={toggleCustomers}
            style={{marginTop:"10px", marginLeft:"50px", color:"#000",fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
              Customers
            </a>
          </button>  
          </li>
          <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center" 
            onClick = {toggleReports}
            style={{marginTop:"10px", marginLeft:"60px", color:"#000", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
              Reports
            </a>
          </button>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              Integrations
            </a>
          </li> */}
        </ul>
        {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
          <span>Saved reports</span>
          <a
            className="link-secondary"
            href="#"
            aria-label="Add a new report"
          >
          </a>
        </h6>
        <ul className="nav flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              Current month
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              Last quarter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              Social engagement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              Year-end sale
            </a>
          </li>
        </ul> */}
        {/* <hr className="my-3" /> */}
        <ul className="nav flex-column">
        <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center "
            style={{marginTop:"10px", marginLeft:"50px", color:"#000", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
              My Profile
            </a>
          </li>
          </button>
          {/* <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center"
            style={{marginTop:"10px", marginLeft:"60px", color:"#000"}}>
              Sign out
            </a>
          </button>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
  </>);
}

export default SideBar;




