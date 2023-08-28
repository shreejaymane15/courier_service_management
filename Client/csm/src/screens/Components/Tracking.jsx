import React, { useState, useContext } from 'react';
import '../css/Tracking.css'
import NavBar from './NavBar';
import NavBarProtected from './NavBarProtected';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getTraackingDetailsAPI } from '../Services/TrackingService';
import { AuthContext } from '../utils/GlobalStates';



function Tracking() {


const [tracking, setTracking] = useState([]);
var [authState, setAuthState] = useContext(AuthContext);

  

debugger;
const navigate = useNavigate();
const isAuthenticated = authState.user_id !== "" && authState.token !== "";



  const getTrackingDetails = async(event) => {
    debugger;
    event.preventDefault(); 
    var tracking_id = event.target.elements.tracking.value;
    const response = await getTraackingDetailsAPI(tracking_id, authState);
    if(response.status == 200){
      if(response.data == "EXPIRED" || response.data == "INVALID"){
        navigate("/login");
        toast.warning("Session Time Expired");
      }
      else{
        setTracking(response.data);
      }
    }else{
      toast.error('Error while calling getorders api');
    }
  }

    return (<>
      {isAuthenticated ? <NavBarProtected/> : <NavBar/>}
        <div>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/css/main.css" rel="stylesheet" />
        <div className="container mt-5">
        <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2 data-aos="fade-up">Track your Courier</h2>
            <form action="#" className="form-search d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200} onSubmit={getTrackingDetails}>
                <input type="text" name="tracking" className="form-control" placeholder="Enter tracking id..."/>
                <button type="submit" className="btn btn-primary ml-2">Track</button>
            </form>
            {/* <center><p data-aos="fade-up" data-aos-delay={100} /><h5>Fill the tracking id correctly</h5><p /></center> */}
            </div>
            <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/img/hero-img.svg" className="img-fluid" alt="" />
            </div>
        </div>
        </div>
        <footer id="footer" className="footer mt-5">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <div className="social-links d-flex ">
                  <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>SwiftTransit</span></strong>. All Rights Reserved
            </div>
        </div>
        </footer>
        </div>
 </> );
}

export default Tracking;