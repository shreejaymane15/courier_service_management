import axios from "axios";
import { createUrl } from "../utils/utils";




export async function getTraackingDetailsAPI(tracking_id, data) {  
   try{

       let url = createUrl(`/api/Tracking/GetShipmentDetails/${tracking_id}`);
       const response = await axios.put(url, data);
       return response;    
    }catch(ex){
        console.log(ex);
        return null;
    }
}



