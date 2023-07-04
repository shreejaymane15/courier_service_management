import React from 'react';
import './css/Tracking.css'
import NavBar from './NavBar';

function Tracking() {
    return (<>
            <NavBar></NavBar>
            <br></br>
            {/* <div>
            <img src="/Images/delivery.jpg" className="img-fluid, custom-size" alt="..." ></img>
            </div> */}
            <br></br>
            <form>
            <div className='bg'>
            <div className="mt-3">
                <label for="exampleInputTrackId" className="form-label, d-flex justify-content-center"><h3 className='text'>Track your courier</h3></label>
                <center>
                <input type="text" className="form-control, form-outline w-25 h-10" id="exampleInputTrackId" placeholder='Type tracking id here...'/>
                <div class="form-helper">Fill the Tracking Id correctly</div>
                </center>
            </div>
            <br></br>
            <div class="d-flex justify-content-center">
            <a class="btn btn-primary btn-lg button" href="#" role="button">Track</a>
            </div>
            </div>
            </form>
            </>);
}

export default Tracking;