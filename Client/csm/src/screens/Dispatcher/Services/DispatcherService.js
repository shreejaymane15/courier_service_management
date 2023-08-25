import axios from "axios";
import { createUrl } from "../../utils/utils";

export async function getEmployeesAPI(id){
    try{
        // debugger;
        let url = createUrl(`/api/Dispatcher/GetEmployees/${id}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
  }

  export async function getOrdersAPI(){
    try{
        // debugger;
        let url = createUrl(`/api/Dispatcher/GetOrders`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
  }

  export async function getComplaintsAPI(id){
    try{
        // debugger;
        let url = createUrl(`/api/Dispatcher/GetComplaints/${id}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
  }

  export async function getRolesAPI(){
    try{
        // debugger;
        let url = createUrl("/api/Dispatcher/GetRoles");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}

export async function getHubLocationsAPI(){
    try{
        let url = createUrl("/api/Dispatcher/GetHubLocations");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}