import { CHANGE_CLASS_MENU_CATALOG_SERVICE } from './action';
import categories from '../utils/categories';

const initialState = categories;

function serviceListMenuCatalogReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CLASS_MENU_CATALOG_SERVICE:
            const {value} = action.payload;
            
            if (!value) return [
                {id: 11, title: "Все", classN: "nav-link active"},
                {id: 12, title: "Мужская обувь", classN: "nav-link"},
                {id: 13, title: "Женская обувь", classN: "nav-link"},
                {id: 14, title: "Обувь унисекс", classN: "nav-link"},
                {id: 15, title: "Детская обувь", classN: "nav-link"},
            ];
            
            const newState = categories.map(i => i);
            newState.forEach((o,i) => {
                if (o.classN === 'nav-link active') {
                    newState[i].classN = "nav-link";
                }
            });
            
            newState.forEach((o,i) => {
                if (o.id === +value) {
                    newState[i].classN = "nav-link active";
                }
            });

            return newState;
      
        default:
            return state;
    }
}

export default serviceListMenuCatalogReducer;