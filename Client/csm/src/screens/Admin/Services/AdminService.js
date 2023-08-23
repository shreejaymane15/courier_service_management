import axios from "axios";
import { createUrl } from "../../utils/utils";

export async function getRolesAPI(){
    try{
        // debugger;
        let url = createUrl("/api/Admin/GetRoles");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}

    
export async function getEmployeesAPI(selectedFilter){
    try{
        // debugger;
        let url = createUrl(`/api/Admin/GetEmployees/${selectedFilter}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
  }



export async function deleteEmployeeAPI(deleteEmployeeId){
    try{
        // debugger;
        let url = createUrl(`/api/Admin/DeleteEmployee/${deleteEmployeeId}`);
        const response = await axios.put(url)
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}


export async function getCitiesAPI(){
    try{
        let url = createUrl("/api/Admin/GetCities");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}

    
export async function getOrdersAPI(selectedFilter){
    try{
        // debugger;
        const filterParam = selectedFilter != "ALL" ? `/${selectedFilter}` : ``;
        let url = createUrl(`/api/Admin/GetOrders${filterParam}`);
        const response =  await axios.get(url)
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}


export async function GetEmployeeDetailsAPI(id){
    try{
        // debugger;
        let url = createUrl(`/api/Admin/GetEmployeeDetails/${id}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}



export async function UpdateEmployeeDetailsAPI(updateid, user){
    try{
        // debugger;
        let url = createUrl(`/api/Admin/UpdateEmployeeDetails/${updateid}`);
        const response  = await axios.put(url, user);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}


export async function AddEmployee(data){
    try{
        // debugger;
        let url = createUrl("/api/Admin/AddEmployeeDetails");
        const response = await axios.post(url, data);
        return response;  
    }catch(ex){
        console.log(ex);
        return null;
    }

}


export async function getCustomerCitiesAPI(){
    try{
        let url = createUrl("/api/Admin/GetCustomerCities");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}

export async function getCustomersAPI(selectedFilter){
    try{
        // debugger;
        const filterParam = selectedFilter != "ALL" ? `/${selectedFilter}` : ``;
        let url = createUrl(`/api/Admin/GetCustomers${filterParam}`);
        const response =  await axios.get(url)
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}
