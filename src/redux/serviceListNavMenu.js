import { CHANGE_CLASS_MENU_SERVICE } from './action';

const initialState = [
    {id: 1, title: "Главная", path: "/bosa-noga-project/", classN: "nav-item"},
    {id: 2, title: "Каталог", path: "/bosa-noga-project/catalog", classN: "nav-item"},
    {id: 3, title: "О магазине", path: "/bosa-noga-project/about", classN: "nav-item"},
    {id: 4, title: "Контакты", path: "/bosa-noga-project/contacts", classN: "nav-item"}
];


function serviceListNavMenuReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CLASS_MENU_SERVICE:
            const {value} = action.payload;
            
            const newState = [
                {id: 1, title: "Главная", path: "/bosa-noga-project/", classN: "nav-item"},
                {id: 2, title: "Каталог", path: "/bosa-noga-project/catalog", classN: "nav-item"},
                {id: 3, title: "О магазине", path: "/bosa-noga-project/about", classN: "nav-item"},
                {id: 4, title: "Контакты", path: "/bosa-noga-project/contacts", classN: "nav-item"}
            ];
            
            newState.forEach((o,i) => {
                if (o.id === +value) {
                    newState[i].classN = "nav-item active";
                }
            });

            return newState;
      
        default:
            return state;
    }
}

export default serviceListNavMenuReducer;