import { Item } from '../ProductCart/ProductDetails';
import { INCREMENT_QUANTITY } from './ActionT';

const Action = (id: Item) => {
    
    return {
        type: INCREMENT_QUANTITY,
        payload : id
    }
}
export default Action;