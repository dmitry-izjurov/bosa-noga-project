import { CHANGE_LIST_SALES_HITS } from './action';

const initialState = [];

function serviceListSalesHitsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LIST_SALES_HITS:
            const {value} = action.payload;
            if (!Array.isArray(value)) return [];
            return value;
      
        default:
            return state;
    }
}

export default serviceListSalesHitsReducer;