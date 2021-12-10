import {

    ADD_STOCK,
    STOCK_LOADING,
    GET_STOCK,
    DELETE_STOCK
} from '../actions/types';
const initialState = {
    stocks: [],
    loading: false,





};

export default function foo(state = initialState, action) {
    switch (action.type) {
        case GET_STOCK:
            return {
                ...state,
                stocks: action.payload,
                loading: false
            };

        case DELETE_STOCK:
            return {
                ...state,
                stocks: state.stocks.filter(stock => stock._id !== action.payload)
            };
        case ADD_STOCK:
            return {
                ...state,
                stocks: [action.payload, ...state.stocks]
            };
        case STOCK_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}