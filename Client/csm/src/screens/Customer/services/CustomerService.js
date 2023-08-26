import axios from "axios";
import { createUrl } from "../../utils/utils";

export async function AddOrderAPI(order, authState){
    try{
        debugger;
        let data = {data: authState, order: order}
        let url = createUrl("/api/Customer/AddOrder");
        const response = await axios.post(url, data);
        return response;  
    }catch(ex){
        console.log(ex);
        return null;
    }
}

export async function getPackageTypeAPI(data){
    try{
        debugger;
        let url = createUrl("/api/Customer/GetPackageType");
        const response = await axios.post(url, data);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
  }

  export async function getStatusAPI(data){
    try{
        debugger;
        let url = createUrl("/api/Customer/GetStatus");
        const response = await axios.post(url, data);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}

  export async function getOrderIdAPI(){
    try{
        // debugger;
        let url = createUrl("/api/Customer/GetOrderId/3");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}

export async function getOrdersAPI(selectedFilter, data){
    try{
        // debugger;
        let url = createUrl(`/api/Customer/GetMyOrders/${selectedFilter}`);
        const response = await axios.put(url, data);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
  }

  export async function getMyProfileAPI(data){
    try{
        let url = createUrl(`/api/Customer/GetMyProfile/`);
        let response = await axios.post(url, data);          
        return response; 
    }catch(ex){
        console.log(ex);
        return null;
    }
}

export async function saveMyProfileAPI(user, data){
    try{
        debugger;
        let url = createUrl(`/api/Customer/SaveMyProfile/${data.user_id}`);
        let response = await axios.put(url, {user, data});
        return response;
    }catch(ex){
        console.log(ex);
        return null;        
    }
}