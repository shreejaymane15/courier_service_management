
import { useEffect, useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getMyProfileAPI, saveMyProfileAPI } from "../services/CustomerService";
import { toast } from "react-toastify";
//import NavBar from "./NavBar";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MyProfile(){

    const [profile, setProfile] = useState({user_Id:"", first_name: "", last_name: "", email:"", password:"", address: "", mobile: "", role:""});
    // const [user_id, setUserid] = useState("");
    const [editing, setEditing] = useState({});

    const navigate = useNavigate();
    //const history = useHistory();
    
    const user_id = sessionStorage.getItem("user_id");
    const token = sessionStorage.getItem("token");
    const data = {
      user_id : user_id,
      token :token
    }
    
    useEffect(()=>{
        GetMyProfile();
        //setUserid(window.sessionStorage.getItem("id"));
    }, [])

    useEffect(()=>{
        GetMyProfile();
        //setUserid(window.sessionStorage.getItem("id"));
    }, [editing]);

    


    const GetMyProfile = async() => {
        var response = await getMyProfileAPI(data);
        if(response.status == 200){
            if(response.data == "EXPIRED" || response.data == "INVALID"){
                navigate("/login");
                toast.warning("Session Time Expired");
            }
            else{
                setProfile(response.data);
            }
        }else{
            toast.error("Error while Fetching Profile");
        }
    } 
        
    function editProfile(id) {
        debugger;
        setEditing(prevEditing => ({
          ...prevEditing,
          [id]: !prevEditing[id]
        }));
    }      


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
          ...prevProfile,
          [name]: value,
        }));
      };

    const saveProfile = async () => {
        if (profile && profile.first_name) {
          const profileToUpdate = profile;
      
          var user = {
            "first_name": profileToUpdate.first_name,
            "last_name": profileToUpdate.last_name,
            "password": profileToUpdate.password,
            "address": profileToUpdate.address,
            "mobile": profileToUpdate.mobile
          }
      
          var response = await saveMyProfileAPI(user, data);
          if (response.status == 200) {
            if (response.data == "EXPIRED" || response.data == "INVALID") {
              navigate("/login");
              toast.warning("Session Time Expired");
            }
            else {
              setEditing(false);
            }
          } else {
            toast.error("Error while Fetching Profile");
          }
        }else{
            toast.error("Error while Fetching Profile");
        }
    }


return(<>
            <div style={{display: 'flex', padding:"6 rem", justifyContent:'center', alignContent:"center"}}>
                <h1>My Profile</h1>
            </div>
            <div className="container row">
            <div className="col"></div>
            <div className="Auth-form-content col"></div>
                <table className="table table-bordered" style={{justifyContent:'center', alignContent:"center"}}>
                <tbody style={{fontSize:"1.0rem", textAlign:"center",justifyContent:'center'}}>
                    <tr>
                        <td>First Name</td>
                    {editing[profile.user_Id]?(
                        <td style={{textAlign: "center"}}>
                        <input
                            id={profile.user_Id}
                            name="first_name"
                            className="form-control mt-1"
                            style={{
                                border:"0",
                                width: "100%",
                                fontSize: "1.0rem",
                                resize: "none",
                                textAlign: "center"
                            }}
                            value={profile[profile.user_Id]?.first_name }
                            onChange={(e) => handleEditChange(e,profile.user_Id)}>           
                        </input></td>
                    ) : (
                      <td>{profile.first_name}</td>
                    )}
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        {editing[profile.user_Id]?(
                        <td style={{textAlign: "center"}}>
                        <input
                            id={profile.user_Id}
                            name="last_name"
                            className="form-control mt-1"
                            style={{
                                border:"0",
                                width: "100%",
                                fontSize: "1.0rem",
                                resize: "none",
                                textAlign: "center"
                            }}
                            value={profile[profile.user_Id]?.last_name }
                            onChange={(e) => handleEditChange(e,profile.user_Id)}>           
                        </input></td>
                    ) : (
                      <td>{profile.last_name}</td>
                    )}
                    </tr>
                        
                    <tr>
                        <td>Email</td>
                        {editing[profile.user_Id]?(
                        <td style={{textAlign: "center"}}>
                        <input
                            id={profile.user_Id}
                            name="email"
                            className="form-control mt-1"
                            style={{
                                border:"0",
                                width: "100%",
                                fontSize: "1.0rem",
                                resize: "none",
                                textAlign: "center"
                            }}
                            value={profile[profile.user_Id]?.email }
                            onChange={(e) => handleEditChange(e,profile.user_Id)}>           
                        </input></td>
                    ) : (
                      <td>{profile.email}</td>
                    )}
                    </tr>
                    <tr>
                        <td>Password</td>
                        {editing[profile.user_Id]?(
                        <td style={{textAlign: "center"}}>
                        <input
                            id={profile.user_Id}
                            name="password"
                            className="form-control mt-1"
                            style={{
                                border:"0",
                                width: "100%",
                                fontSize: "1.0rem",
                                resize: "none",
                                textAlign: "center"
                            }}
                            value={profile[profile.user_Id]?.password }
                            onChange={(e) => handleEditChange(e,profile.user_Id)}>           
                        </input></td>
                    ) : (
                      <td>{profile.password}</td>
                    )}
                    </tr>
                    <tr>
                        <td>Address</td>
                        {editing[profile.user_Id]?(
                        <td style={{textAlign: "center"}}>
                        <input
                            id={profile.user_Id}
                            name="address"
                            style={{
                                border: "0",
                                width: "100%",
                                fontSize: "1.0rem",
                                resize: "none",
                                textAlign: "center"
                            }}
                            value={profile[profile.user_Id]?.address }
                            onChange={(e) => handleEditChange(e,profile.user_Id)}>           
                        </input></td>
                    ) : (
                      <td>{profile.address}</td>
                    )}
                    </tr>
                    <tr>
                        <td>Mobile</td>
                    {editing[profile.user_Id]?(
                        <td style={{textAlign: "center"}}>
                        <textarea
                            id={profile.user_Id}
                            name="mobile"
                            style={{
                                border: "0",
                                width: "100%",
                                fontSize: "1.0rem",
                                resize: "none",
                                textAlign: "center"
                            }}
                            value={profile[profile.user_Id]?.mobile || ""}
                            onChange={(e) => handleEditChange(e, profile.user_Id)}>    
                        </textarea></td>
                    ) : (
                        <td>{profile.mobile}</td>
                    )}
                    </tr>
                </tbody>
            </table>
        <div className="col"></div>
    </div>
        <div style={{display: 'flex',  justifyContent:"space-evenly", alignItems:'top'}}>
        {editing[profile.user_Id]?(
            <button className="btn btn-primary"
                    onClick={()=>{saveProfile(profile.user_Id)}}>
                Save
            </button>):(
            <button className="btn btn-warning" 
                    onClick={()=>{editProfile(profile.user_Id)}}
                    >
                Edit
            </button>)}
        </div>
    </>)
}

export default MyProfile;
