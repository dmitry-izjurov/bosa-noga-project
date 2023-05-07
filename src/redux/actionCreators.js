import {
    CHANGE_CLASS_MENU_SERVICE,
    CHANGE_LIST_SALES_HITS,
    CHANGE_LIST_SALES_SPLICE,
    CHANGE_CLASS_MENU_CATALOG_SERVICE,
    CHANGE_LIST_SALES_SPLICE_ALL_CATALOG_SERVICE,
    CHANGE_ACTIVE_ID_CATALOG_SERVICE,
    ADD_PRODUCT_IN_CART_SERVICE,
    REMOVE_PRODUCT_OF_CART_SERVICE
} from './action';

export function changeService(value) {
    return {type: CHANGE_CLASS_MENU_SERVICE, payload: {value}};
}

export function changeListSalesHits(value) {
    return {type: CHANGE_LIST_SALES_HITS, payload: {value}};
}

export function changeListSalesSplice(value) {
    return {type: CHANGE_LIST_SALES_SPLICE, payload: {value}};
}

export function changeClassMenuCatalogService(value) {
    return {type: CHANGE_CLASS_MENU_CATALOG_SERVICE, payload: {value}};
}

export function changeListSalesSpliceAllCatalogService(value, id) {
    return {type: CHANGE_LIST_SALES_SPLICE_ALL_CATALOG_SERVICE, payload: {value, id}};
}

export function changeActiveIdCatalogService(id) {
    return {type: CHANGE_ACTIVE_ID_CATALOG_SERVICE, payload: {id}};
}

export function addProductInCartService(id) {
    return {type: ADD_PRODUCT_IN_CART_SERVICE, payload: {idAdd: id}};
}

export function removeProductOfCartService(id) {
    return {type: REMOVE_PRODUCT_OF_CART_SERVICE, payload: {idRemove: id}};
}