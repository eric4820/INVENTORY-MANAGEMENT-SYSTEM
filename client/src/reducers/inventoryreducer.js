import {


    ADD_INVENTORY,
    INVENTORY_LOADING,
    GET_INVENTORY,
    DELETE_INVENTORY,
    GET_SUPPLIER_INVENTORY
} from '../actions/types';
const initialState = {
    inventories: [],
    loading: false,





};

export default function foo(state = initialState, action) {

    switch (action.type) {
        case GET_INVENTORY:
            return {
                ...state,
                inventories: action.payload,
                loading: false
            };
        case GET_SUPPLIER_INVENTORY:
            return {
                ...state,
                inventories: state.inventories.filter(inventory => inventory.email == action.payload),
                loading: false
            };
        case DELETE_INVENTORY:
            return {
                ...state,
                inventories: state.inventories.filter(inventory => inventory._id !== action.payload)
            };
        case ADD_INVENTORY:
            return {
                ...state,
                inventories: [action.payload, ...state.inventories]
            };
        case INVENTORY_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}