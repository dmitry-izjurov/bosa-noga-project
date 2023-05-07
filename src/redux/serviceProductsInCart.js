import { ADD_PRODUCT_IN_CART_SERVICE, REMOVE_PRODUCT_OF_CART_SERVICE } from './action';
import globalDataObjs from '../utils/globalDataObjs';

const initialState = [];

function serviceProductsInCartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_IN_CART_SERVICE:
            const {idAdd} = action.payload;
            const arr = [];
            state.forEach(a => arr.push(a));
            const newProduct = globalDataObjs.find(a => a.id === idAdd);
            if (newProduct) {
                arr.push(newProduct);
                return arr;
            }
            return state;

        case REMOVE_PRODUCT_OF_CART_SERVICE:
            const {idRemove} = action.payload;
            return state.filter(a => a.id !== idRemove);
      
        default:
            return state;
    }
}

export default serviceProductsInCartReducer;