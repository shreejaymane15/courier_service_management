function DispatcherSideBar({toggleComponent}) {

  const toggleDispatcherDashboard = () => {
    toggleComponent("DispatcherDashboard");
  };

  const toggleOrderSummary = () => {
    toggleComponent("OrderSummary");
  };

  const toggleNewOrder = () => {
    toggleComponent("NewOrder");
  };

  const toggleDispatcherEmployeeDirectory = () => {
    toggleComponent("DispatcherEmployeeDirectory");
  };

  const toggleRaisedTickets = () => {
    toggleComponent("RaisedTickets");
  };

  const toggleTracking = () => {
    toggleComponent("Tracking");
  };

  const toggleSettings = () => {
    toggleComponent("Settings");
  };
  

    return (<>
        
        <div className="sidebar border border-right col-md-12 p-0 bg-body-tertiary">
      <div
        className="offcanvas-lg offcanvas-end bg-body-tertiary"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          />
        </div>
       
        <div className="offcanvas-body d-md-flex flex-column overflow-y-auto">

          <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center gap-2 active"
              aria-current="page"
              onClick={toggleDispatcherDashboard}
            >
              Dashboard
            </a>
          </li>
            <li className="nav-item">
              <a
               
                className="nav-link d-flex align-items-center"
                
                onClick={toggleOrderSummary}
              >
               Order Summary
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" onClick={toggleNewOrder}>
                Create New Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" onClick={toggleDispatcherEmployeeDirectory}>
                Employee Directory
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center"onClick={toggleRaisedTickets}>
                Raised Tickets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" onClick={toggleTracking}>
                Order Tracking
              </a>
            </li>
           
          </ul>
          <hr className="my-3" />
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" onClick={toggleSettings}>
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center " href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>);
}

export default DispatcherSideBar;