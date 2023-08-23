import DispatcherSideBar from "./DispatcherSideBar";
import NavBarProtected from "../Components/NavBarProtected";

function DispatcherDash() {
    return (<>
    <NavBarProtected/>
    <div className="container-fluid">
  <div className="row">
      <DispatcherSideBar/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Order Summary
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Raised Tickets
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
          >
            <svg className="bi">
              <use xlinkHref="#calendar3" />
            </svg>
            This week
            
          </button>
        </div>
      </div>
      <canvas
        className="my-4 w-100"
        id="myChart"
        width={724}
        height={305}
        style={{
          display: "block",
          boxSizing: "border-box",
          height: 244,
          width: 579
        }}
      />
      <h2>Section title</h2>
      <div className="table-responsive small">
      </div>
    </main>
  </div>
</div>
    </>);
}

export default DispatcherDash;