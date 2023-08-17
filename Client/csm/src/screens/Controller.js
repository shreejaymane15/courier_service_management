import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HubLocation from "./HubLocation";
import Admin from "./Admin/Admin";
import Customer from "./Customer/Customer";
import Dispatcher from "./Dispatcher/Dispatcher";
import DeliveryPersonnel from "./DeliveryPersonnel/DeliveryPersonnel";
import Tracking from "./Tracking"
import './css/App.css'

function Controller() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
                <Route path='/hublocation' element={<HubLocation/>}/>
                <Route path='/admin' element={<Admin/>}/>                
                <Route path='/customer' element={<Customer/>}/>                
                <Route path='/dispatcher' element={<Dispatcher/>}/>                
                <Route path='/deliverypersonnel' element={<DeliveryPersonnel/>}/>                
                <Route path='/trackshipment' element={<Tracking/>}/>                
            </Routes>
        </BrowserRouter>
    );
}

export default Controller;