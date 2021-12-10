import {
   
    ADD_INVENTORY,
   
    INVENTORY_LOADING,
    
    DELETE_INVENTORY,
   
    GET_INVENTORY
} from './types';
import axios from 'axios';

import { returnErrors } from './erroractions';
export const getItems = () => dispatch => {
    //we call this to set loading to true before the axios request loads

    dispatch(setInventoryLoading());
    // we added that proxy in package.json to not have to write out full address
    //we are making a request to the GET endpoint we created in our routes, we then get the data and send it as a payload to the dispatcher
    axios.get("/api/Inventory")
        .then(res =>{
            try {
                dispatch({
                    type: GET_INVENTORY,
                    payload: res.data
                })
              }
              catch(e) {
                console.log(res, e)
              }
            }
        )
        .catch(err =>
            //created in errorActions takes in 2 or 3 values
            dispatch(returnErrors(err.response.data, err.response.status))
        );  


};
export const addInventory = Inventory => dispatch => {


    axios.post('/api/Inventory', Inventory)
        .then(res => dispatch({
            type: ADD_INVENTORY,
            payload: res.data
        }))
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)))

};
export const deleteInventory = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/Inventory/${id}`, getState)
        .then(res => dispatch({
            type: DELETE_INVENTORY,
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

export const setInventoryLoading = () => {

    return {
        type: INVENTORY_LOADING
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