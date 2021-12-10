import {
    employee_LOADED,
    employee_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_employeeS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    
    DELETE_employee
} from '../actions/types';

const initialState = {
    employees: [],

    token: localStorage.getItem('token'),
    isAuthenticated:localStorage.getItem('token') ? true: null,
    isLoading: false,

    employee: localStorage.getItem('token') ? true: null,
};

export default function foo(state = initialState, action) {
    switch (action.type) {
        case GET_employeeS:
            return {
                ...state,
                employees: action.payload,
                loading: false
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
       
        case DELETE_employee:
            return {
                ...state,
                employees: state.employees.filter(employee => employee._id !== action.payload)
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                employees: [action.payload, ...state.employees]
            };
        case employee_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case employee_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                employee: action.payload
            };
           
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
       
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                employee: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}