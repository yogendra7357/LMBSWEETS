import { Item } from "../ProductCart/ProductDetails";
import { DECREMENT_QUANTITY } from "./ActionT";

const Action = (id: Item) => {
    
    return {
        type: DECREMENT_QUANTITY,
        payload : id
    }
}
export default Action;