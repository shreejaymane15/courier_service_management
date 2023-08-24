
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import NavBar from "./NavBar";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MyProfile(){

    const [profile, setProfile] = useState({user_Id:"", first_name: "", last_name: "", email:"", password:"", address: "", mobile: "", role:""});
    // const [user_id, setUserid] = useState("");
    const [editing, setEditing] = useState({});

    const navigate = useNavigate();
    //const history = useHistory();
    
    useEffect(()=>{
        GetMyProfile();
        //setUserid(window.sessionStorage.getItem("id"));
    }, [])

    useEffect(()=>{
        GetMyProfile();
        //setUserid(window.sessionStorage.getItem("id"));
    }, [editing]);

    


    function GetMyProfile(){
        
      axios.get(`http://localhost:58447/api/Customer/GetMyProfile/${3}`)
      .then((response) => {
      debugger;
      var responseData = response.data;
      setProfile(responseData);
      })
      .catch(error => {
      console.log(error);        
    })
    }  
        
    function editProfile(id) {
        debugger;
        setEditing(prevEditing => ({
          ...prevEditing,
          [id]: !prevEditing[id]
        }));
    }      


    function handleEditChange(e,id) {
        setProfile(prevProfile => ({
          ...prevProfile,
          [id]: {
            ...prevProfile[id],
            [e.target.name]: e.target.value
          }
        }));
    }

    function saveProfile(id) {
        const profileToUpdate = profile[id];
        debugger;
        var details = {
            "first_name": profileToUpdate.first_name,
            "last_name": profileToUpdate.last_name,
            "email": profileToUpdate.email,
            "password": profileToUpdate.password,
            "address": profileToUpdate.address,
            "mobile": profileToUpdate.mobile
          };

          axios.put(`http://localhost:58447/api/Customer/UpdateProfileDetails/${3}`, details)
          .then((response) => {
          debugger;
          var result = response.data;
          if(result != 0){
            setEditing("");
          }else{

          }
          })
          .catch(error => {
          console.log(error);        
        })
 
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
