import { CHANGE_LIST_SALES_SPLICE } from './action';
import globalDataObjs from '../utils/globalDataObjs';

const initialState = {global: globalDataObjs.map((a,i) => i), spl: []};

function serviceListSalesSpliceReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LIST_SALES_SPLICE:
            const {value} = action.payload;
            if (value !== 'load-product') return {global: globalDataObjs.map((a,i) => i), spl: []};
            const newState = {};
            for (let i = 0; i < 6; i++) {
                if (state.global.length === 0) {
                    break;
                }
                let moveIndex = Math.floor(Math.random() * (state.global.length - 1));
                let findInd = state.global.findIndex(i => i === moveIndex);
                let indSplice = state.global.splice(findInd, 1);
                state.spl.push(indSplice[0]);
            }
            newState.global = state.global.map(a => a);
            newState.spl = state.spl.map(a => a);
            return newState;
      
        default:
            return state;
    }
}

export default serviceListSalesSpliceReducer;