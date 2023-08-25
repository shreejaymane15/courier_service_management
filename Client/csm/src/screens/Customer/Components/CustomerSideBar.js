function CustomerSideBar({toggleComponent}) {

  const toggleDashboard = () => {
    toggleComponent("Dashboard");
  };

  const toggleOrders = () => {
    toggleComponent("COrders");
  };

  const toggleProfiles = () => {
    toggleComponent("MyProfile");
  };

  const toggleSettings = () => {
    toggleComponent("AccountSettings");
  };


  const toggleComplaintSupport = () => {
    toggleComponent("ComplaintSupport");
  };

  const toggleSignOut = () => {
    toggleComponent("Sign Out");
  };

    return (<>
       <div className="sidebar border border-right col-md-12 p-0 " style={{ height: "100vh", backgroundColor:"#CACFD2" }}>
    <div
      className="offcanvas-lg offcanvas-end bg-body-tertiary"
      tabIndex={-1}
      id="sidebarMenu"
      aria-labelledby="sidebarMenuLabel">
      <div className="d-md-flex flex-column" style={{backgroundColor:"#CACFD2"}}> 
        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a
              className="nav-link d-flex align-items-center active"
              aria-current="page"
              onClick={toggleDashboard}
              style={{marginTop:"10px", marginLeft:"50px", color:"#000",justifyContent:"center", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}
              >
                   Dashboard
            </a>
            </button>
          </li>
          <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center" 
            onClick={toggleOrders}
            style={{marginTop:"10px", marginLeft:"65px", color:"#000",justifyContent:"center", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
                  Orders
            </a>
            </button>
          </li>
          <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center" 
            onClick={toggleProfiles}
            style={{marginTop:"10px", marginLeft:"20px", color:"#000",justifyContent:"center", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
                 Profile
            </a>
          </button>
          </li>
          <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center" 
            onClick={toggleSettings}
            style={{marginTop:"10px", marginLeft:"50px", color:"#000",justifyContent:"center", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
                 Account Settings
            </a>
          </button>  
          </li>
          <li className="nav-item">
          <button className="btn btn-light" style={{width:"100%", marginTop:"40px", paddingBottom:"10px", backgroundColor:"#CACFD2"}}>
            <a className="nav-link d-flex align-items-center" 
            onClick = {toggleComplaintSupport}
            style={{marginTop:"10px", marginLeft:"60px", color:"#000", justifyContent:"center", fontSize:"20px",fontFamily: 'Josefin Sans, sans-serif', fontWeight:"bold"}}>
                 Complaints and Support
            </a>
          </button>
          </li>
          
        </ul>
       
      </div>
    </div>
  </div>
  </>);
   
}

export default CustomerSideBar;