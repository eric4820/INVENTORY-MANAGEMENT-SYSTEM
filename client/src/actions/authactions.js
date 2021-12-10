import axios from 'axios';
import { returnErrors } from './erroractions';
import {
    employee_LOADED,
    employee_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    
    GET_employeeS,
    DELETE_employee,
} from './types';
// Check token & load employee
export const getemployees = () => dispatch => {
    //we call this to set loading to true before the axios request loads
    dispatch(setemployeesLoading());
   
    // we added that proxy in package.json to not have to write out full address
    //we are making a request to the GET endpoint we created in our routes, we then get the data and send it as a payload to the dispatcher
         axios.get("/api/employees")
        .then(res =>
            dispatch({
                type: GET_employeeS,
                payload: res.data
            })
        )
        .catch(err =>
            //created in errorActions takes in 2 or 3 values
            dispatch(returnErrors(err.response.data, err.response.status))
        );


};


export const deleteemployee = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/employees/${id}`, getState)
        .then(res => dispatch({  
            type: DELETE_employee,
            payload: id
        }))
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)));

};
export const loadUser = () => (dispatch, getState) => {
    // employee loading
    dispatch({ type: employee_LOADING });

    axios
        .get('/api/auth/employees', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: employee_LOADED,
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

// Register employee
export const register = Employee => (
    dispatch
) => {
  
    axios
        .post('/api/employees', Employee)
        .then(res =>
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        )
        .then(res =>
            dispatch(getemployees())
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
            )
           
        });  
};

// Login employee
export const login = ({ email, password }) => (
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
        .post('/api/auth', body, config)
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


// Logout employee
export const logout = (employee) => {
    return {
        type: LOGOUT_SUCCESS
    };
};
export const setemployeesLoading = () => {
    return {
        type: employee_LOADING

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