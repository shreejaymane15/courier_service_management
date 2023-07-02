import {useNavigate} from 'react-router-dom';

function NavBarProtected() {
    const navigate = useNavigate();


    const GoToHome = () =>{
        navigate('/');
    }

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
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light" style={{height:"65px"}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">
                <img src="/Images/bootstrap-logo.svg" alt="" width="60" height="54"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" style={{fontSize:"25px"}} href="#">SwiftTransit</a>
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0" style={{fontSize:"21px", marginLeft:"64px", paddingTop:"5px"}}>
                    <li className="nav-item" style={{marginLeft:"16px", marginRight:"16px"}}>
                    <a className="nav-link" aria-current="page" onClick={GoToHome}>Home</a>
                    </li>
                    <li className="nav-item" style={{marginLeft:"16px", marginRight:"16px"}}>
                    <a className="nav-link" onClick={GoToTrackShipment}>Track Your Shipment</a>
                    </li>
                    <li className="nav-item" style={{marginLeft:"16px", marginRight:"16px"}}>
                    <a className="nav-link" onClick={GoToAboutUs}>About Us</a>
                    </li>
                    <li className="nav-item" style={{marginLeft:"16px", marginRight:"16px"}}>
                    <a className="nav-link" onClick={GoToContactUs}>Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginLeft:"32px", marginRight:"32px"}}>
                <button class="btn btn-outline-success me-2" type="button" onClick={GoToLogin}>Log Out</button>
                </div>
                </div>
            </div>
            </nav>
            </>);
}

export default NavBarProtected;