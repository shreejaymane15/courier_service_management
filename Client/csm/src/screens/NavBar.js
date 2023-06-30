import {useNavigate} from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    const GoToLogin = () =>{
        navigate('/login');
    }

    const GoToAboutUs = () =>{
        navigate('/about');
    }

    const GoToContactUs = () =>{
        navigate('/contact');
    }

    const GoToTrackShipment = () =>{
        navigate('/trackshipment');
    }

    return (<>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height:"5rem"}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">
                <img src="/Images/bootstrap-logo.svg" alt="" width="60" height="54"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" style={{fontSize:"1.5rem"}} href="#">SwiftTransit</a>
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0" style={{fontSize:"1.3rem", marginLeft:"4rem", paddingTop:"0.3rem"}}>
                    <li className="nav-item" style={{marginLeft:"1rem", marginRight:"1rem"}}>
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown" style={{marginLeft:"1rem", marginRight:"1rem"}}>
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Services
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:"#F5F5F5"}}>
                        <a class="dropdown-item" href="#">Enterprise Logistic Services</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> 
                    <li className="nav-item" style={{marginLeft:"1rem", marginRight:"1rem"}}>
                    <a className="nav-link" onClick={GoToTrackShipment}>Track Your Shipment</a>
                    </li>
                    <li className="nav-item" style={{marginLeft:"1rem", marginRight:"1rem"}}>
                    <a className="nav-link" onClick={GoToAboutUs}>About Us</a>
                    </li>
                    <li className="nav-item" style={{marginLeft:"1rem", marginRight:"1rem"}}>
                    <a className="nav-link" onClick={GoToContactUs}>Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginLeft:"2rem", marginRight:"2rem"}}>
                <button class="btn btn-outline-success me-2" type="button" onClick={GoToLogin}>Login</button>
                </div>
                </div>
            </div>
            </nav>
            </>);
}

export default NavBar;