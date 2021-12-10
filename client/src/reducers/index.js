import { combineReducers } from 'redux';
import supplierReducer from './supplierReducer';
import inventoryreducer from './inventoryreducer';
import Stockreducer from './Stockreducer';

import errorreducer from './errorreducer';
import authreducer from './authreducer';
export default combineReducers({
    pauth: supplierReducer,
    Inventory: inventoryreducer,
    Stock: Stockreducer,

    error: errorreducer,
    auth: authreducer,
    //auth: supplierReducer
})