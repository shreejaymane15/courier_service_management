import axios from "axios";
import { createUrl } from "../../utils/utils";

export async function getOrderIdAPI(){
    try{
        // debugger;
        let url = createUrl("/api/DeliveryPersonnel/GetOrderId/7");
        const response = await axios.get(url);
        return response;
    }catch(ex){
        console.log(ex);
        return null;
    }
}