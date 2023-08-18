import Orders from "./Orders";

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
    toggleComponent("Customers");
  };


  const toggleReports = () => {
    toggleComponent("Reports");
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
              onClick={toggleDashboard}
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" onClick={toggleOrders}>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" onClick={toggleEmployeeDirectory}>
              Employee Directory
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" onClick={toggleCustomers}>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" onClick = {toggleReports}>
              Reports
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              Integrations
            </a>
          </li> */}
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
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
        </ul>
        <hr className="my-3" />
        <ul className="nav flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center " href="#">
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </>);
}

export default SideBar;




