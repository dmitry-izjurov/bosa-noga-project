import { combineReducers, compose, legacy_createStore } from 'redux';
import serviceListNavMenuReducer from './serviceListNavMenu';
import serviceListSalesHitsReducer from './serviceListSalesHits';
import serviceListSalesSpliceReducer from './serviceListSalesSplice';
import serviceListMenuCatalogReducer from './serviceClassMenuCatalog';
import serviceListSalesSpliceAllCatalogReducer from './serviceListSalesSpliceAllCatalog';
import serviceActiveIdCatalogReducer from './serviceActiveIdCatalog';
import serviceProductsInCartReducer from './serviceProductsInCart';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      serviceListNavMenu: serviceListNavMenuReducer,
      serviceListSalesHits: serviceListSalesHitsReducer,
      serviceListSalesSplice: serviceListSalesSpliceReducer,
      serviceListMenuCatalog: serviceListMenuCatalogReducer,
      serviceListSalesSpliceAllCatalog: serviceListSalesSpliceAllCatalogReducer,
      serviceActiveIdCatalog: serviceActiveIdCatalogReducer,
      serviceProductsInCart: serviceProductsInCartReducer
    }),
    undefined,
    compose(
      ReactReduxDevTools
    )
  )
}

export default configureStore;