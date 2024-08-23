import { Item } from "../ProductCart/ProductDetails";
import { REMOVE_FROM_CART } from './ActionT';
const Action = (id: Item) => {
    
    return {
        type: REMOVE_FROM_CART,
        payload : id
    }
}
export default Action;