import { CHANGE_ACTIVE_ID_CATALOG_SERVICE } from './action';
import categories from '../utils/categories';

const arrIdCategories = categories.map(a => a.id);
const initialState = arrIdCategories[0];

function serviceActiveIdCatalogReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ACTIVE_ID_CATALOG_SERVICE:
            const {id} = action.payload;
            const findId = arrIdCategories.find(a => a === +id);
            
            if (findId) return findId;
            return initialState;
      
        default:
            return state;
    }
}

export default serviceActiveIdCatalogReducer;