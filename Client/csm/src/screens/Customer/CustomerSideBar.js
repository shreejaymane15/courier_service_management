function CustomerSideBar({toggleComponent}) {

  const toggleDashboard = () => {
    toggleComponent("Dashboard");
  };

  const toggleOrders = () => {
    toggleComponent("COrders");
  };

  const toggleAddresses = () => {
    toggleComponent("Addresses");
  };

  const toggleSettings = () => {
    toggleComponent("AccountSettings");
  };


  const toggleComplaints = () => {
    toggleComponent("Support");
  };

  const toggleSignOut = () => {
    toggleComponent("Sign Out");
  };

    return (<>
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
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
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
                onClick={toggleDashboard}
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" onClick={toggleOrders}>
                 My Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" onClick={toggleAddresses}>
                My Addresses
              </a>
            </li>       
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" onClick={toggleSettings}>
                Account Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" onClick={toggleComplaints}>
                Complaints and Support
              </a>
            </li>
          <hr className="my-3" />
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" onClick={toggleSignOut}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>);
}

export default CustomerSideBar;