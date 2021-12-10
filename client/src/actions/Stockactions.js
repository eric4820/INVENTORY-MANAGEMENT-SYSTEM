import {

    ADD_STOCK,

    STOCK_LOADING,

    DELETE_STOCK,

    GET_STOCK
} from './types';
import axios from 'axios';

import { returnErrors } from './erroractions';
export const getstock = () => dispatch => {
    //we call this to set loading to true before the axios request loads

    dispatch(setStockLoading());
    // we added that proxy in package.json to not have to write out full address
    //we are making a request to the GET endpoint we created in our routes, we then get the data and send it as a payload to the dispatcher
    axios.get("/api/Stock")
        .then(res =>
            dispatch({
                type: GET_STOCK,
                payload: res.data
            })
        )
        .catch(err =>
            //created in errorActions takes in 2 or 3 values
            dispatch(returnErrors(err.response.data, err.response.status))
        );


};
export const addstock = Stock => dispatch => {


    axios.post('/api/Stock', Stock)
        .then(res => dispatch({
            type: ADD_STOCK,
            payload: res.data
        }))
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)))

};
export const deletestock = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/Stock/${id}`, getState)
        .then(res => dispatch({
            type: DELETE_STOCK,
            payload: id
        }))
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)));

};

export const editItem = (item) => (dispatch) => {
    axios.put(`/api/items/edit/${item._id}`, item).then((res) =>
        dispatch({
            //type: EDIT_ITEM,
            payload: res.data,
        })
    );
};

export const setStockLoading = () => {

    return {
        type: STOCK_LOADING
    };
};
// Setup config/headers and token
export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState().auth.token;

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