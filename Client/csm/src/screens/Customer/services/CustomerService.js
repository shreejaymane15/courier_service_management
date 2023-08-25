import axios from "axios";
import { createUrl } from "../../utils/utils";

export async function AddOrder(data){
    try{
        // debugger;
        let url = createUrl("/api/Customer/AddOrder");
        const response = await axios.post(url, data);
        return response;  
    }catch(ex){
        console.log(ex);
        return null;
    }
}

export async function getPackageTypeAPI(){
    try{
        // debugger;
        let url = createUrl("/api/Customer/GetPackageType");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
  }

  export async function getOrderIdAPI(){
    try{
        debugger;
        let url = createUrl("/api/Customer/GetOrderId/3");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}