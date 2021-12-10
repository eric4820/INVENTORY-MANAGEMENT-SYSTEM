import {
    
    supplierS_LOADING,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    GET_supplier,
    GET_supplierS,
    GET_USERS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,  
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    DELETE_supplierS   
} from '../actions/types';
const initialState = {
    suppliers: [],
    loading: false,

    isAuthenticated: null,   
    isLoading: false,

    supplier: null
};

export default function fooo(state = initialState, action) {
    switch (action.type) {
        case GET_supplierS:
            return {
                ...state,
                suppliers: action.payload,
                loading: false
            };
        case GET_supplier:
            return {
                ...state,

                suppliers: state.suppliers.filter(supplier => supplier._id === action.payload),
                loading: false
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                suppliers: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };

        case REGISTER_SUCCESS:
           
            return {
                ...state,
                suppliers: [action.payload, ...state.suppliers],
               
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.getItem('token');
            return {
                ...state,
                token: null,
                supplier: null,
                isAuthenticated: false,
                isLoading: false
            };
        case GET_USERS:
            return {
                ...state,
                supplier: action.payload,
                loading: false
            };

        case DELETE_supplierS:
            return {
                ...state,
                suppliers: state.suppliers.filter(supplier => supplier._id !== action.payload)
            };
       
        case supplierS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}