import axios from "axios";
import { createUrl } from "../../utils/utils";

export async function getOrderIdAPI(data){
    try{
        // debugger;
        let url = createUrl("/api/DeliveryPersonnel/GetOrderId/id");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}