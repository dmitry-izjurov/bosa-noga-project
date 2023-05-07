import { CHANGE_LIST_SALES_SPLICE_ALL_CATALOG_SERVICE } from './action';
import globalDataObjs from '../utils/globalDataObjs';
import categories from '../utils/categories';

const arrIdCategories = categories.map(a => a.id);
const initialState = {id: arrIdCategories[0], global: globalDataObjs.map((a,i) => i), spl: []};

function serviceListSalesSpliceAllCatalogReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LIST_SALES_SPLICE_ALL_CATALOG_SERVICE:
            const {value, id} = action.payload;
            const findId = arrIdCategories.find(a => a === +id);
            if (value !== 'load-product' || !id || !findId) return {id: arrIdCategories[0], global: globalDataObjs.map((a,i) => i), spl: []};
            
            const newState = {};

            function getNewState() {
                for (let i = 0; i < 6; i++) {
                    if (state.global.length === 0) {
                        break;
                    }
                    let moveIndex = Math.floor(Math.random() * (state.global.length - 1));
                    let findInd = state.global.findIndex(i => i === moveIndex);
                    let indSplice = state.global.splice(findInd, 1);
                    state.spl.push(indSplice[0]);
                }

                newState.id = +id;
                newState.global = state.global.map(a => a);
                newState.spl = state.spl.map(a => a);
            }

            if (findId === arrIdCategories[0]) {
                if (state.id === +id) {
                    getNewState();
                    return newState;
                } else {
                    state = {id: +id, global: globalDataObjs.map((a,i) => i), spl: []};
                    getNewState();
                    return newState;
                }

            } else {
                if (state.id === +id) {
                    getNewState();
                    return newState;
                } else {
                    const arr = [];
                    globalDataObjs.forEach((a,i) => {
                        if (a.category === +id) arr.push(i);
                    });
                    state = {id: +id, global: arr, spl: []};
                    getNewState();
                    return newState;
                }
                
            }
            
        default:
            return state;
    }
}

export default serviceListSalesSpliceAllCatalogReducer;