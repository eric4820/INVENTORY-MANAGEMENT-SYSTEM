import {
    GET_supplierS,
    GET_supplier,
   
    ADD_supplierS,
    supplierS_LOADING,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    
    DELETE_supplierS
} from './types';
import axios from 'axios';

import { returnErrors } from './erroractions';
export const getsuppliers = () => dispatch => {
    //we call this to set loading to true before the axios request loads
    dispatch(setsuppliersLoading());
    axios
    // we added that proxy in package.json to not have to write out full address
    //we are making a request to the GET endpoint we created in our routes, we then get the data and send it as a payload to the dispatcher
        .get("/api/suppliers")
        .then(res =>
            dispatch({
                type: GET_supplierS,
                payload: res.data
            })
        )
        .catch(err =>
            //created in errorActions takes in 2 or 3 values
            dispatch(returnErrors(err.response.data, err.response.status))
        );


};
export const deletesupplier = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/suppliers/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_supplierS,
            payload: id
        }))
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)));

};
export const getsupplier = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/suppliers/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: GET_supplier,
            payload: id
        }))
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)));

};

export const addsupplier = (supplier) => (dispatch, getState) => {
    axios
        .post('/api/suppliers', supplier, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_supplierS,
            payload: res.data
        }))
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)))

};
export const setsuppliersLoading = () => {
    return {
        type: supplierS_LOADING

    };
};
export const loadsupplier = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });

    axios
        .get('/api/pauth/suppliers', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};



// Logout User


// Setup config/headers and token
export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState().pauth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};


// Register User
export const pregister = ({ name, email, password, location }) => (
    dispatch, getState
) => {
   
    // Request body
    const body = JSON.stringify({ name, email, password, location });

    axios
        .post('/api/suppliers', body, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        )
        .then(res =>
            dispatch(getsuppliers())
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
            )
           
        });  
};

// Login User
export const plogin = ({ email, password }) => (
    dispatch
) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Request body
    const body = JSON.stringify({ email, password });

    axios
        .post('/api/pauth', body, config)
        .then(res =>
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            )
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

// Logout User
export const logout = (supplier) => {
    return {
        type: LOGOUT_SUCCESS
    };
};

// Setup config/headers and token